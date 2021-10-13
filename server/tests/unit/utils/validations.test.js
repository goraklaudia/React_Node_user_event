import { userMock } from '../../mocks/user.js';
import { validateDate, validateEmail } from '../../../services/utils/validations.js';

describe('Validations functions', () => {
    describe('Validate email', () => {
        it('should be correct if contains all needed signs', () => {
            const result = validateEmail(userMock.email);
            expect(result).toBe(true);
        });
    
        it('should be invalid when does not contains @', () => {
            const wrongEmail = 'wrongemial.com';
            const result = validateEmail(wrongEmail);
            expect(result).toBe(false);
        });
    });

    describe('Validate date', () => {
        it('should be correct if is in good format', () => {
            const result = validateDate(userMock.date);
            expect(result).toBe(true);
        });
    
        it('should be invalid when does not have separators', () => {
            const wrongDate = '20202020';
            const result = validateDate(wrongDate);
            expect(result).toBe(false);
        });
    
        it('should be invalid when day is to big', () => {
            const wrongDate = '2020-20-40';
            const result = validateDate(wrongDate);
            expect(result).toBe(false);
        });
    });
})