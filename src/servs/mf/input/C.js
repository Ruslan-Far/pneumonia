import {left, middle, right} from "../common";

export function C_is_low(x)
{
    return left(3, 3.5, x);
}

export function C_is_normal(x)
{
    return middle(3, 5, 7, x);
}

export function C_is_high(x)
{
    return right(6.5, 7, x);
}
