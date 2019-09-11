export declare type VolumeGetParameters = {
    /**
     * ID of volume to retrieve.
     */
    volumeId: string;
    /**
     * Brand results for partner ID.
     */
    partner: string;
    /**
     * Restrict information returned to a set of selected fields.
      Acceptable values are:
        - "**full**" - Includes all volume data.
        - "**lite**" - Includes a subset of fields in volumeInfo and accessInfo.
     */
    projection: string;
    /**
     * String to identify the originator of this request.
     */
    source: string;
};
