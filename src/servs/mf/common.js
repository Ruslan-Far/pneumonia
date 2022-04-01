export function left(a, b, x)
{
    if (x <= a)
        return 1;
    if (x >= b)
        return 0;
    return ((b - x) / (b - a));
}

export function middle(a, b, c, d, x)
{
    if (a <= x && x <= b)
        return 1 - (b - x) / (b - a);
    if (b <= x && x <= c)
        return 1;
    if (c <= x && x <= d)
        return 1 - (x - c) / (d - c);
    return 0;
}

export function right(a, b, x)
{
    if (x <= a)
        return 0;
    if (x >= b)
        return 1;
    return ((x - a) / (b - a));
}
