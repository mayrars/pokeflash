export interface Berry {
    count:    number;
    next: string;
    previus:string;
    results:  Result[];
}

export interface Result {
    name: string | undefined;
    url:  string | undefined;
}
