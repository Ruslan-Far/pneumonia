<script>
import {Line} from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement)

export default {
  name: 'LineChart',
  components: Line,
  extends: Line,
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },

  mounted() {
    this.draw();
  },

  methods:{
    draw()
    {
      this.renderChart(this.chartData, this.options);
    }
  }
}
</script>
