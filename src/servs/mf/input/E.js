import {left, middle, right} from "../common";

export function E_is_not_often(x)
{
    return left(12, 15, x);
}

export function E_is_normal(x)
{
    return middle(12, 15, 27, 30, x);
}

export function E_is_often(x)
{
    return right(27, 30, x);
}
