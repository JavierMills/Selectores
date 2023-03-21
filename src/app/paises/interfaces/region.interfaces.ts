export interface Region {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc:         string;
    independent:  boolean;
    status:       string;
    unMember:     boolean;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    string;
    latlng:       number[];
    landlocked:   boolean;
    borders:      string[];
    area:         number;
    flag:         string;
    population:   number;
    fifa:         string;
    timezones:    string[];
    continents:   string[];
    flags:        Flags;
    startOfWeek:  string;
}




export interface Flags {
    png: string;
    svg: string;
    alt: string;
}



export interface Name {
    common:     string;
    official:   string;
}
