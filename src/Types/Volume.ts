import { ISO639_1, ISO3166 } from './LanguageCodes'
import { ISO4217 } from './CurrencyCodes'

export type VolumeInfoIndustryIdentifierType =
  | 'ISBN_10'
  | 'ISBN_13'
  | 'ISSN'
  | 'OTHER'

export type VolumeInfoIndustryIdentifier = {
  /**
   * Identifier type. Possible values are ISBN_10, ISBN_13, ISSN and OTHER.
   */
  type: VolumeInfoIndustryIdentifierType
  /**
   * Industry specific volume identifier.
   */
  identifier: string
}

export type VolumeInfoDimensions = {
  /**
   * Height or length of this volume (in cm).
   */
  height: string
  /**
   * Width of this volume (in cm).
   */
  width: string
  /**
   * Thickness of this volume (in cm).
   */
  thickness: string
}

export type VolumeInfoImageLinks = {
  /**
   * Image link for thumbnail size (width of ~128 pixels). (in LITE projection)
   */
  thumbnail: string
  /**
   * Image link for small size (width of ~300 pixels). (in LITE projection)
   */
  small: string
  /**
   * Image link for medium size (width of ~575 pixels). (in LITE projection)
   */
  medium: string
  /**
   * Image link for large size (width of ~800 pixels). (in LITE projection)
   */
  large: string
  /**
   * Image link for small thumbnail size (width of ~80 pixels). (in LITE projection)
   */
  smallThumbnail: string
  /**
   * Image link for extra large size (width of ~1280 pixels). (in LITE projection)
   */
  extraLarge: string
}

export type VolumeInfoPrintType = 'BOOK' | 'MAGAZINE'

export type VolumeInfo = {
  /**
   * Volume title. (In LITE projection.)
   */
  title: string
  /**
   * Volume subtitle. (In LITE projection.)
   */
  subtitle: string
  /**
   * The names of the authors and/or editors for this volume. (In LITE projection)
   */
  authors: string[]
  /**
   * Publisher of this volume. (In LITE projection.)
   */
  publisher: string
  /**
   * Date of publication. (In LITE projection.)
   */
  publishedDate: string
  /**
   * A synopsis of the volume. The text of the description is formatted in HTML and includes simple formatting elements, such as b, i, and br tags. (in LITE projection)
   */
  description: string
  /**
   * Industry standard identifiers for this volume.
   */
  industryIdentifiers: VolumeInfoIndustryIdentifier[]
  /**
   * Total number of pages.
   */
  pageCount: number
  /**
   * Physical dimensions of this volume.
   */
  dimensions: VolumeInfoDimensions
  /**
   * Type of publication of this volume. Possible values are BOOK or MAGAZINE.
   */
  printType: VolumeInfoPrintType
  /**
   * A list of subject categories, such as "Fiction", "Suspense", etc.
   */
  categories: string[]
  /**
   * The mean review rating for this volume. (min = 1.0, max = 5.0)
   */
  averageRating: number
  /**
   * The number of review ratings for this volume.
   */
  ratingsCount: number
  /**
   * An identifier for the version of the volume content (text & images). (In LITE projection)
   */
  contentVersion: string
  /**
   * A list of image links for all the sizes that are available. (in LITE projection)
   */
  imageLinks: VolumeInfoImageLinks
  /**
   * Best language for this volume (based on content). It is the two-letter ISO 639-1 code such as 'fr', 'en', etc.
   */
  language: ISO639_1
  /**
   * The main category to which this volume belongs. It will be the category from the categories list returned below that has the highest weight.
   */
  mainCategory: string
  /**
   * URL to preview this volume on the Google Books site.
   */
  previewLink: string
  /**
   * URL to view information about this volume on the Google Books site. (In LITE projection)
   */
  infoLink: string
  /**
   * Canonical URL for a volume. (In LITE projection.)
   */
  canonicalVolumeLink: string
}

export type UserInfo = {
  /**
   * This user's review of this volume, if one exists.
   */
  review: any
  /**
   * The user's current reading position in the volume, if one is available. (In LITE projection.)
   */
  readingPosition: any
  /**
   * Whether or not this volume was purchased by the authenticated user making the request. (In LITE projection.)
   */
  isPurchased: boolean
  /**
   * Timestamp when this volume was last modified by a user action, such as a reading position update, volume purchase or writing a review. (RFC 3339 UTC date-time format).
   */
  updated: string
  /**
   * Whether or not this volume was pre-ordered by the authenticated user making the request. (In LITE projection.)
   */
  isPreordered: boolean
}

export type SaleInfoListPriceRetailPrice = {
  /**
   * Amount in the currency listed below. (In LITE projection.)
   */
  amount: number
  /**
   * An ISO 4217, three-letter currency code. (In LITE projection.)
   */
  currencyCode: ISO4217
}

export type SaleInfoListPrice = {
  /**
   * Amount in the currency listed below. (In LITE projection.)
   */
  amount: number
  /**
   * An ISO 4217, three-letter currency code. (In LITE projection.)
   */
  currencyCode: ISO4217
  /**
   * The actual selling price of the book. This is the same as the suggested retail or list price unless there are offers or discounts on this volume. (in LITE projection)
   */
  retailPrice: SaleInfoListPriceRetailPrice
}

export type SaleInfo = {
  /**
   * The two-letter ISO_3166-1 country code for which this sale information is valid. (In LITE projection.)
   */
  country: ISO639_1
  /**
   * Whether or not this book is available for sale or offered for free in the Google eBookstore for the country listed above. Possible values are FOR_SALE, FREE, NOT_FOR_SALE, or FOR_PREORDER.
   */
  saleability: string
  /**
   * Whether or not this volume is an eBook (can be added to the My eBooks shelf).
   */
  isEbook: boolean
  /**
   * Suggested retail price. (in LITE projection)
   */
  listPrice: SaleInfoListPrice
  /**
   * URL to purchase this volume on the Google Books site. (in LITE projection)
   */
  buyLink: string
  /**
   * The date on which this book is available for sale.
   */
  onSaleDate: string
}

export type AccessInfoViewability =
  | 'PARTIAL'
  | 'ALL_PAGES'
  | 'NO_PAGES'
  | 'UNKNOWN'

export type AccessInfoEpub = {
  /**
   * URL to download epub. (In LITE projection.)
   */
  downloadLink: string
  /**
   * URL to retrieve ACS token for epub download. (In LITE projection.)
   */
  acsTokenLink: string
  /**
   * Is a flowing text epub available either as public domain or for purchase. (In LITE projection.)
   */
  isAvailable: boolean
}

export type AccessInfoPdf = {
  /**
   * URL to download pdf. (In LITE projection.)
   */
  downloadLink: string
  /**
   * URL to retrieve ACS token for pdf download. (In LITE projection.)
   */
  acsTokenLink: string
  /**
   * Is a scanned image pdf available either as public domain or for purchase. (In LITE projection.)
   */
  isAvailable: boolean
}

export type AccessInfoDownloadAccess = {
  /**
   * Resource type.
   */
  kind: string
  /**
   * Identifies the volume for which this entry applies.
   */
  volumeId: string
  /**
   * Whether this volume has any download access restrictions.
   */
  restricted: boolean
  /**
   * If restricted, whether access is granted for this (user, device, volume).
   */
  deviceAllowed: boolean
  /**
   * If deviceAllowed, whether access was just acquired with this request.
   */
  justAcquired: boolean
  /**
   * If restricted, the maximum number of content download licenses for this volume.
   */
  maxDownloadDevices: number
  /**
   * If restricted, the number of content download licenses already acquired (including the requesting client, if licensed).
   */
  downloadsAcquired: number
  /**
   * Client nonce for verification. Download access and client-validation only.
   */
  nonce: string
  /**
   * ]Client app identifier for verification. Download access and client-validation only.
   */
  source: string
  /**
   * Error/warning reason code. Additional codes may be added in the future. 0 OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200 WARNING_USED_LAST_ACCESS
   */
  reasonCode: string
  /**
   * Error/warning message.
   */
  message: string
  /**
   * Response signature.
   */
  signature: string
}

export type AccessInfoAccessViewStatus =
  | 'FULL_PURCHASED'
  | 'FULL_PUBLIC_DOMAIN'
  | 'SAMPLE'
  | 'NONE'

export type AccessInfoTextToSpeechPermission =
  | 'ALLOWED'
  | 'ALLOWED_FOR_ACCESSIBILITY'
  | 'NOT_ALLOWED'

export type AccessInfo = {
  /**
   * The two-letter ISO_3166-1 country code for which this access information is valid. (In LITE projection.)
   */
  country: ISO3166
  /**
   * The read access of a volume. Possible values are PARTIAL, ALL_PAGES, NO_PAGES or UNKNOWN. This value depends on the country listed above. A value of PARTIAL means that the publisher has allowed some portion of the volume to be viewed publicly, without purchase. This can apply to eBooks as well as non-eBooks. Public domain books will always have a value of ALL_PAGES.
   */
  viewability: AccessInfoViewability
  /**
   * Information about epub content. (in LITE projection)
   */
  epub: AccessInfoEpub
  /**
   * Information about pdf content. (in LITE projection)
   */
  pdf: AccessInfoPdf
  /**
   * Combines the access and viewability of this volume into a single status field for this user. Values can be FULL_PURCHASED, FULL_PUBLIC_DOMAIN, SAMPLE or NONE. (In LITE projection.)
   */
  accessViewStatus: AccessInfoAccessViewStatus
  /**
   * Whether this volume can be embedded in a viewport using the Embedded Viewer API.
   */
  embeddable: boolean
  /**
   * Whether or not this book is public domain in the country listed above.
   */
  publicDomain: boolean
  /**
   * Whether text-to-speech is permitted for this volume. Values can be ALLOWED, ALLOWED_FOR_ACCESSIBILITY, or NOT_ALLOWED.
   */
  textToSpeechPermission: AccessInfoTextToSpeechPermission
  /**
   * URL to read this volume on the Google Books site. Link will not allow users to read non-viewable volumes.
   */
  webReaderLink: string
  /**
   * Information about a volume's download license access restrictions.
   */
  downloadAccess: AccessInfoDownloadAccess
}

export type SearchInfo = {
  /**
   * A text snippet containing the search query.
   */
  textSnippet: string
}

export type Volume = {
  /**
   * Resource type for a volume. (In LITE projection.)
   */
  kind: string
  /**
   * Unique identifier for a volume. (In LITE projection.)
   */
  id: string
  /**
   * Opaque identifier for a specific version of a volume resource. (In LITE projection)
   */
  etag: string
  /**
   * URL to this resource. (In LITE projection.)
   */
  selfLink: string
  /**
   * General volume information.
   */
  volumeInfo: VolumeInfo
  /**
   * User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
   */
  userInfo: UserInfo
  /**
   * Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
   */
  saleInfo: SaleInfo
  /**
   * Search result information related to this volume.
   */
  searchInfo: SearchInfo
  accessInfo: AccessInfo
}
