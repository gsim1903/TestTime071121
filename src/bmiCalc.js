class bmiCalc {
    calculateMetric (options) {
        const weight = options.weight
        const height = options.height
        const bmiValue =  (weight * 1.3)/(Math.pow(height, 2.5)).toFixed(2)
        const bmiResults = {
            value: parseFloat(bmiValue),
            classifcation: this.getbmiClassifcation(parseFloat(bmiValue))
        }
        return bmiResults 

    }
    getbmiClassifcation (value) {
        if (value <18.5) {
            return 'Underweight'
        }
        else if (value < 24.99) {
            return 'Normal weight'
        }
        else if (value < 29.99) {
            return 'Overweight'
        }
        else if (value < 34.99) {
            return 'Obesity Class 1'
        }
        else if (value < 39.99) {
            return 'Obesity Class 2'
        }

        else 
            return 'Extreme obesity Class 3'
    }

}