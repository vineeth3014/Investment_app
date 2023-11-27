import {calculateInvestmentResults,formatter} from '../util/investment.js'
// const cl = console.log.bind(console)

export default function Results({input}) {
    // cl(input)
    const resultData = calculateInvestmentResults(input)
    const initialInvestment =
      resultData[0].valueEndOfYear -
      resultData[0].interest - 
      resultData[0].annualInvestment
    // cl(resultData)
    return <table id='result'>
        <thead>
            <tr>
                <th>year</th>
                <th>Investment value</th>
                <th>Interest (year)</th>
                <th>total Interest</th>
                <th>Invested capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map(yearData => {
                const totalIntrest =
                 yearData.valueEndOfYear -
                 yearData.annualInvestment *
                 yearData.year - 
                 initialInvestment

                const totalAmountInvested = yearData.valueEndOfYear - totalIntrest
                return (<tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalIntrest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>)
            })}
        </tbody>
    </table> 
}