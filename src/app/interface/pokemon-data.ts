export interface Data {
    count: number,
    next: string,
    previous: number,
    results: Results[]
}

export interface Results {
    name: string,
    url: string,
}
