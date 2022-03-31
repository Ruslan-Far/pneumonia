import {numberRules} from "./Rule";

export function defuzzifier(c, rules)
{
    let i = 0;
    let sumNumerator = 0;
    let sumDenominator = 0;

    while (i < numberRules)
    {
        sumNumerator += c[i] * rules[i].S_is();
        sumDenominator += c[i];
        i++;
    }
    if (sumNumerator === 0)
        return 0;
    return (sumNumerator / sumDenominator);
}
