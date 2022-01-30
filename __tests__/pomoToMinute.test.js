import { pomoToMinutes } from "../functions/pomoToMinutes";

describe('pomoToMinutes', () => {
    test('should return 30 minutes if passed 1 pomodoro', () => {
        expect(pomoToMinutes(1)).toBe('30 Minutes')
    });

    test('should return 1 hour if passed 2', () => {
        expect(pomoToMinutes(2)).toBe('1 Hour')
    });

    test('should return 1 Hour 30 Minutes', () => {
        expect(pomoToMinutes(3)).toBe('1 Hour 30 Minutes')
    });

    test('should work with any number of pomdoros', () => {
        expect(pomoToMinutes(4)).toBe("2 Hours")

        expect(pomoToMinutes(5)).toBe("2 Hours 30 Minutes")

        expect(pomoToMinutes(6)).toBe("3 Hours")

        expect(pomoToMinutes(7)).toBe("3 Hours 30 Minutes")

        expect(pomoToMinutes(8)).toBe("4 Hours")
        
        expect(pomoToMinutes(9)).toBe("4 Hours 30 Minutes")

        expect(pomoToMinutes(10)).toBe("5 Hours")

        expect(pomoToMinutes(15)).toBe("7 Hours 30 Minutes")
    });

    
    
});