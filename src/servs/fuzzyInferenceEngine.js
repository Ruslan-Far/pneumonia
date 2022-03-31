import {numberRules, numberSubconditionsInRule} from "./Rule";

export function aggregate(b)
{
    let c = [numberRules];
    let i = 0;
    let j = 0;

    while (i < numberRules)
    {
        c[i] = Math.min(b[j], b[j + 1], b[j + 2], b[j + 3], b[j + 4]);
        j += numberSubconditionsInRule;
        i++;
    }
    return c;
}
