import { Client } from '~/Client';
import { Volume } from '~/Types/Volume';
import { VolumeGetParameters } from '~/Types/VolumeGetParameters';
import { VolumeListParameters } from '~/Types/VolumeListParameters';
import { VolumeList } from '~/Types/VolumeList';
export declare class VolumeClient extends Client {
    /**
     * Get volume by volume id or options
     *
     * @param volumeIdOrOptions
     */
    get(volumeIdOrOptions: string | VolumeGetParameters): Promise<Volume>;
    /**
     * Get volume by volume id
     *
     * @param volumeId
     */
    private getByVolumeId;
    /**
     * List volumes
     *
     * @param queryOrOptions
     */
    list(queryOrOptions: string | VolumeListParameters): Promise<VolumeList>;
    /**
     * List by query
     *
     * @param query
     */
    private listByQuery;
    /**
     * List by options
     *
     * @param options
     */
    private listByOptions;
    /**
     * Get Volume by options
     *
     * @param options
     */
    private getByOptions;
}
