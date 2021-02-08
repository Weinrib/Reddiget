import { CHECK_IF_GIFV, GET_THUMBNAIL, REPLACE_GIFV_WITH_MP4 } from "../common";

import DefaultImage from '../resources/placeholder.jpg';

describe('Testing utility functions', () => {

    test('Tests GET_THUMBNAIL for undefined', () => {
        const returnedValue = GET_THUMBNAIL(undefined);
        expect(returnedValue).toBe(DefaultImage)
    });

    test('Tests GET_THUMBNAIL for default', () => {
        const returnedValue = GET_THUMBNAIL('default');
        expect(returnedValue).toBe(DefaultImage)
    });

    test('Tests GET_THUMBNAIL for nsfw', () => {
        const returnedValue = GET_THUMBNAIL('nsfw');
        expect(returnedValue).toBe(DefaultImage)
    });

    test('Tests GET_THUMBNAIL for self', () => {
        const returnedValue = GET_THUMBNAIL('self');
        expect(returnedValue).toBe(DefaultImage)
    });

    test('Tests REPLACE_GIFV_WITH_MP4 for undefined', () => {
        const returnedValue = REPLACE_GIFV_WITH_MP4(undefined);
        expect(returnedValue).toBe(undefined);
    });

    test('Tests REPLACE_GIFV_WITH_MP4 for a string ending in .gifv', () => {
        const returnedValue = REPLACE_GIFV_WITH_MP4("randomstring.gifv");
        expect(returnedValue).toBe("randomstring.mp4");
    });

    test('Tests CHECK_IF_GIFV for a string ending in .gifv', () => {
        const returnedValue = CHECK_IF_GIFV("randomstring.gifv");
        expect(returnedValue).toBe(true);
    });

});