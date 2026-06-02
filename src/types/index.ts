export interface Tab {
    id: string;
    name: string;
    icon: string;
}

export interface Contract {
    id: string;
    tabId: string;
    logo: string;
    title: string;
    price: string;
    priceUnit: string;
    duration: string;
    tags: string[];
    verified: boolean;
    description: string;
}
