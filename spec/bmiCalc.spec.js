const bmiCalc = require('../src/js/bmiCalc.js')

subject = new bmiCalc();

describe ('bmiCalc',() => {
    describe ('#calculateMetric',() => { 

        //1

        describe ('batman',() => {
            let results 

            beforeEach (() => {
                results = subject.calculateMetric({ height: 2.00, weight: 100})
            })

        it('Expecting a two decimal place return float given proper arguments',() => {
            expect(results.value).toEqual(22.98)

            })

        it('Expecting to return a classofcation of "Normal Weight"',() => {
            expect(results.classifcation).toEqual('Normal Weight')
            })
        })

        //2 
        
        describe ('Penguin',() => {
            let results 

            beforeEach (() => {
                results = subject.calculateMetric({ height: 1.50, weight: 90})
            })

        it('Expecting a two decimal place return float given proper arguments',() => {
            expect(results.value).toEqual(42.46)

            })

        it('Expecting to return a classofcation of "Extreme Obesityt"',() => {
            expect(results.classifcation).toEqual('Extreme Obesity')
            })
        })

        //3 

        describe ('Riddler',() => {
            let results 

            beforeEach (() => {
                results = subject.calculateMetric({ height: 1.70, weight: 50})
            })

        it('Expecting a two decimal place return float given proper arguments',() => {
            expect(results.value).toEqual(17.24)

            })

        it('Expecting to return a classofcation of "Underweight"',() => {
            expect(results.classifcation).toEqual('Underweight')
            })
        })

        //4

        describe ('TwoFace',() => {
            let results 

            beforeEach (() => {
                results = subject.calculateMetric({ height: 2.25, weight: 150})
            })

        it('Expecting a two decimal place return float given proper arguments',() => {
            expect(results.value).toEqual(25.68)

            })

        it('Expecting to return a classofcation of "Overweight"',() => {
            expect(results.classifcation).toEqual('Overweight')
            })
        })

        //5

        describe ('Joker',() => {
            let results 

            beforeEach (() => {
                results = subject.calculateMetric({ height: 1.60, weight: 90})
            })

        it('Expecting a two decimal place return float given proper arguments',() => {
            expect(results.value).toEqual(36.11)

            })

        it('Expecting to return a classofcation of "Obesity Class 1',() => {
            expect(results.classifcation).toEqual('Obesity Class 1')
            })
        })
    
    })
})