import * as ClientModule from '../clients';
import { countClientsMatching } from '../search';

describe('countClientsMatching tests', () => {
    test('should return 0 when 0 out of 2 clients match', () => {

        jest.spyOn(ClientModule, 'requestClients').mockReturnValue([
            {
                id: 15,
                name: 'Antônio Jesus'
            },
            {
                id: 16,
                name: 'Maria Santos'
            }
        ])

        const result = countClientsMatching('Soares');
        expect(result).toEqual(0);
    });

    test('should return 2 when 2 out of 4 clients match', () => {

        jest.spyOn(ClientModule, 'requestClients').mockReturnValue([
            {
                id: 14,
                name: 'Beatriz Souza'
            },
            {
                id: 15,
                name: 'Antônio Jesus'
            },
            {
                id: 16,
                name: 'Maria Santos'
            },
            {
                id: 17,
                name: 'Marcos Souza'
            },
        ])

        const result = countClientsMatching('Souza');
        expect(result).toEqual(2);
    });
});
