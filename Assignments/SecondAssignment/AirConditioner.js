class AirConditioner{

    constructor(isOn, temperature) {
        this._temperature = temperature;
        this._isOn = isOn;

        this.setIsOn = function (isOn) {
       this._isOn = isOn;
}
        this.getIsOn= function () {
            return isOn;
        }
       this.setTemperature = function (temperature){
            this._temperature = temperature;
        }
        this.getTemperature = function () {
            return temperature;
        }

       function switchOn (){
            return isOn = true;
       }

         function switchOff(){
            return isOn = false;
        }

        function increaseTemperature  (){
            if (this._isOn === true && temperature < 30)
                return temperature +=1;
        }

        function  decreaseTemperature(){
            if (this._isOn === true && temperature >= 16
            && temperature <= 30)
               return  temperature -=1;
        }





        module.exports = {switchOn,switchOff,increaseTemperature,decreaseTemperature};

}

}
