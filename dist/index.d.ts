import { AxiosRequestConfig } from "axios";
interface Meta {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    site_name?: string;
    [key: string]: any;
}
declare const parse: (url: string, config?: AxiosRequestConfig | undefined) => Promise<{
    meta?: undefined;
    og?: undefined;
    images?: undefined;
} | {
    meta: Meta;
    og: Meta;
    images: {
        src: string;
    }[];
}>;
declare const parser: (url: string, config?: AxiosRequestConfig | undefined) => Promise<{
    meta?: undefined;
    og?: undefined;
    images?: undefined;
} | {
    meta: Meta;
    og: Meta;
    images: {
        src: string;
    }[];
}>;
export default parser;
export { parse, parser };
//# sourceMappingURL=index.d.ts.map