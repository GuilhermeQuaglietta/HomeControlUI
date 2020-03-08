import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface IMenu {
    nome?: string;
    icone?: IconDefinition;
    url?: string;
    subMenu?: IMenu[];
    separator?: boolean;
}

