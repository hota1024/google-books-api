export declare type VolumeListParametersDownload = 'epub';
export declare type VolumeListParametersFilter = 'ebooks' | 'free-ebooks' | 'full' | 'paid-ebooks' | 'partial';
export declare type VolumeListParametersLibraryRestrict = 'my-library' | 'no-restrict';
export declare type VolumeListParametersOrderBy = 'newest' | 'relevance';
export declare type VolumeListParametersPrintType = 'all' | 'books' | 'magazines';
export declare type VolumeListParametersProjection = 'full' | 'lite';
export declare type VolumeListParameters = {
    /**
     * Full-text search query string.
     */
    q: string;
    /**
     * Restrict to volumes by download availability.
     * Acceptable values are:
     * "**epub**" - All volumes with epub.
     */
    download?: VolumeListParametersDownload;
    /**
     * Filter search results.
     *
     * Acceptable values are:
     *
     * - "**ebooks**" - All Google eBooks.
     *
     * - "**free-ebooks**" - Google eBook with full volume text viewability.
     *
     * - "**full**" - Public can view entire volume text.
     *
     * - "**paid-ebooks**" - Google eBook with a price.
     * - "**partial**" - Public able to see parts of text.
     */
    filter?: string;
    /**
     * Restrict results to books with this language code.
     */
    langRestrict: string;
    /**
     * Restrict search to this user's library.
     * Acceptable values are:
     *
     * "**my-library**" - Restrict to the user's library, any shelf.
     *
     * "**no-restrict**" - Do not restrict based on user's library.
     */
    libraryRestrict: VolumeListParametersLibraryRestrict;
    /**
     * Maximum number of results to return. Acceptable values are 0 to 40, inclusive.
     */
    maxResults: number;
    /**
     * Sort search results.
     * - Acceptable values are:
     *
     * - "**newest**" - Most recently published.
     *
     * - "**relevance**" - Relevance to search terms.
     */
    orderBy: VolumeListParametersOrderBy;
    /**
     * Restrict and brand results for partner ID.
     */
    partner: string;
    /**
     * Restrict to books or magazines.
     * Acceptable values are:
     *
     * - "**all**" - All volume content types.
     *
     * - "**books**" - Just books.
     *
     * - "**magazines**" - Just magazines.
     */
    printType: VolumeListParametersPrintType;
    /**
     * Restrict information returned to a set of selected fields.
     * Acceptable values are:
     *
     * - "**full**" - Includes all volume data.
     *
     * - "**lite**" - Includes a subset of fields in volumeInfo and accessInfo.
     */
    projection: VolumeListParametersProjection;
    /**
     * Set to true to show books available for preorder. Defaults to false.
     */
    showPreorders: boolean;
    /**
     * String to identify the originator of this request.
     */
    source: string;
    /**
     * Index of the first result to return (starts at 0)
     */
    startIndex: number;
};
