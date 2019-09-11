import { Volume } from './Volume';
export declare type VolumeList = {
    /**
     * Resource type.
     */
    kind: string;
    /**
     * A list of volumes.
     */
    items: Volume[];
    /**
     * Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated.
     */
    totalItems: number;
};
