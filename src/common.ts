import DefaultImage from './resources/placeholder.jpg';
import { GIFV_EXTENSION, IMAGES_TO_BE_REPLACED_WITH_PLACEHOLDER_ON_LISTING, MP4_EXTENSION } from './Store/PostList/types';

export const GET_THUMBNAIL = (thumb: string | undefined) => {
    if(!thumb) return DefaultImage;

    if(IMAGES_TO_BE_REPLACED_WITH_PLACEHOLDER_ON_LISTING.includes(thumb)) return DefaultImage;

    return thumb;
};

export const REPLACE_GIFV_WITH_MP4 = (url: string | undefined) => url?.replace(GIFV_EXTENSION, MP4_EXTENSION);
export const CHECK_IF_GIFV = (url: string | undefined) => url?.endsWith(GIFV_EXTENSION);