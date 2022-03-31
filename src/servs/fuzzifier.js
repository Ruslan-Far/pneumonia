import {numberRules, numberSubconditionsInRule} from "./Rule";

export function fuzzifier(rules, xA, xB, xC, xD, xE)
{
    let b = [numberRules * numberSubconditionsInRule];
    let i = 0;
    let j = 0;

    while (j < numberRules)
    {
        b[i++] = rules[j].A_is(xA);
        b[i++] = rules[j].B_is(xB);
        b[i++] = rules[j].C_is(xC);
        b[i++] = rules[j].D_is(xD);
        b[i++] = rules[j].E_is(xE);
        j++;
    }
    return b;
}
