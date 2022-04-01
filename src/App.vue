<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app">
    <h1>Определение пневмонии</h1>
    <hr>
    <div class="inputs">
      <span>
        <strong>Возраст</strong>
        <input type="number" min="0" max="140" v-model="xA">
      </span>
      <br>
      <span>
        <strong>Артериальное давление (систолическое)</strong>
        <input type="number" min="0" max="200" v-model="xB">
      </span>
      <br>
      <span>
        <strong>Азот мочевины крови</strong>
        <input type="number" min="0" max="10" v-model="xC">
      </span>
      <br>
      <span>
        <strong>Оценка сознания</strong>
        <input type="number" min="0" max="5" v-model="xD">
      </span>
      <br>
      <span>
        <strong>Частота дыхания (в минуту)</strong>
        <input type="number" min="0" max="60" v-model="xE">
      </span>
      <button v-on:click="send">Отправить</button>
    </div>
    <div v-if="defRes > -1">
      <div class="result">
        <label>Ваш результат: {{defRes}}</label>
      </div>
      <div class="scale">
        <label>Шкала оценок</label><br/>
        <label>0 - Вы здоровы</label><br/>
        <label>1 - Вы больны чем-то другим</label><br/>
        <label>2 - Вы больны пневмонией (лечиться дома)</label><br/>
        <label>3 - Вы больны пневмонией (лечиться в больнице)</label>
      </div>
      <LineChart v-bind:chartData="chartData" v-bind:options="options" ref="LineChart"/>
    </div>
    <div v-if="defRes === -2">
      <div class="result">
        <label>Заполните все поля!</label>
      </div>
    </div>
  </div>
</template>

<script>
import {numberRules, numberSubconditionsInRule, genRules} from './servs/Rule';
import {fuzzifier} from './servs/fuzzifier'
import {aggregate} from "./servs/fuzzyInferenceEngine";
import {defuzzifier} from "./servs/defuzzifier";
import {A_is_old} from "./servs/mf/input/A";
import {B_is_low} from "./servs/mf/input/B";
import {C_is_high} from "./servs/mf/input/C";
import {D_is_traced} from "./servs/mf/input/D";
import {E_is_often} from "./servs/mf/input/E";
import LineChart from "./components/LineChart";

export default {
  name: 'App',
  components: {LineChart},
  data() {
    return {
      rules: new Array(numberRules),
      b: [numberRules * numberSubconditionsInRule],
      c: [numberRules],
      defRes: -1,
      xA: '',
      xB: '',
      xC: '',
      xD: '',
      xE: '',

      yA: '',
      yB: '',
      yC: '',
      yD: '',
      yE: '',
      count: 0,

      chartData: {
        labels: [
          'Возраст',
          'Давление',
          'Азот мочевины крови',
          'Оценка сознания',
          'Частота дыхания'
        ],
        datasets: [
          {
            label: '',
            data: []
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    send()
    {
      if (this.xA === '' || this.xB === '' || this.xC === '' || this.xD === '' || this.xE === '') {
        this.defRes = -2;
        this.count = 0;
      }
      else
      {
        this.rules = genRules();
        this.b = fuzzifier(this.rules, this.xA, this.xB, this.xC, this.xD, this.xE);
        this.c = aggregate(this.b);
        this.draw();
        this.defRes = defuzzifier(this.c, this.rules);
      }
    },
    draw()
    {
      this.yA = A_is_old(this.xA);
      this.yB = B_is_low(this.xB);
      this.yC = C_is_high(this.xC);
      this.yD = D_is_traced(this.xD);
      this.yE = E_is_often(this.xE);
      this.chartData.datasets = [
        {
          label: 'График',
          data: [this.yA, this.yB, this.yC, this.yD, this.yE, 0, 1]
        }
      ];
      if (this.count !== 0)
        this.$refs.LineChart.draw();
      else
        this.count = 1;
    }
  }
}
</script>

<style>
.inputs span
{
  display: flex;
  margin-left: 600px;
}

.inputs button
{
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  margin-top: 20px;
}

.result
{
  color: #2c3e50;
  font-weight: bold;
  margin-top: 30px;
}

.scale
{
  color: #2c3e50;
  font-weight: bold;
  margin-left: 800px;
}

#app
{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
