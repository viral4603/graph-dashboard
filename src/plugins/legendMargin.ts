import { ChartComponentLike } from "chart.js";

const LegendMargin: ChartComponentLike = {
    id: 'legendMargin',

    beforeInit(chart:any) {
        console.log(chart.legend.fit)
        const fitValue = chart.legend.fit;
        chart.legend.fit = function fit(){
        //     console.log(chart.legend)
            fitValue.bind(chart.legend)()
            return this.height += 20;
        }
    // beforeRender(chart, args, options) {
    //     console.log(chart)
    // },
    // afterDatasetsDraw(chart, args, options, cancelable) {
    //     console.log(chart)
    // }
    }

}

export default LegendMargin;