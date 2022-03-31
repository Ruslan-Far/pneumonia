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
    </div>
    <div v-if="defRes === -2">
      <div class="result">
        <label>Заполните все поля!</label>
      </div>
    </div>
  </div>
</template>

<script>
import {numberRules, numberSubconditionsInRule, genRules} from '@/servs/Rule';
import {fuzzifier} from '@/servs/fuzzifier'
import {aggregate} from "./servs/fuzzyInferenceEngine";
import {defuzzifier} from "./servs/defuzzifier";

export default {
  name: 'App',
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
      xE: ''
    }
  },
  methods: {
    send()
    {
      if (this.xA === '' || this.xB === '' || this.xC === '' || this.xD === '' || this.xE === '')
        this.defRes = -2;
      else
      {
        this.rules = genRules();
        this.b = fuzzifier(this.rules, this.xA, this.xB, this.xC, this.xD, this.xE);
        this.c = aggregate(this.b);
        this.defRes = defuzzifier(this.c, this.rules);
      }
    },
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
