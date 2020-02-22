/* eslint-disable */
'use strict';

jest.mock('fs');
const logger = require('../src/module/logger.js');
const fileReader = require('../src/module/file.js');

describe('File module', () => {
    it('should response to wrong paths', () => {
        let wrongFile = 'you/are/going/to/nowhere'

        return fileReader(wrongFile, (err, data) => {
            expect(err).toBeFalsy();
        });
    });

    it('should read an exist files', () => {
        let file = `${__dirname}/src/data/test.txt`;
        console.log('test', file)
        return fileReader(file, (err, data) => {
            console.log('data', data)
            expect(typeof data).toBe('object');
            expect(err).toBeDefined();
        })
    })
});

describe('Logger', () => {
    let consoleSpy;
    let events = '';
    let payload = '';

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('Spying on the result of console.log()', () => {
        logger(events, payload);
        expect(consoleSpy).toHaveBeenCalled();
    });
});