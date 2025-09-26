class Buttons {
    constructor(btn, value) {
        this.btn = btn;
        this.value = value;
        this.mapOperator = Buttons.mapOperator();
    };

    static mapOperator(symbol) {
        const operatorMap = {
            "+": "+",
            "-": "-",
            "*": "*"
        }
    };

    click(input) {
       
        switch (this.btn.id) {
            case "btn-plus":
            case "btn-minus":
            case "btn-multi":
                this.btn.addEventListener("click", () => {
                    input.value += this.value;
                });
                break;
            case "btn-clear":
                this.btn.addEventListener("click", () => {
                    input.value = "";
                });
                break;
            case "btn-equal":
                this.btn.addEventListener("click", () => {
                    try {
                        console.log(input.value);
                        calc = Number(input.value);
                    }
                    catch (error) {
                        input.value = "Error";
                    }
                });
                break;
            default:
                this.btn.addEventListener("click", () => {
                    input.value += this.value;
                });
        };
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    const listBtn = document.querySelectorAll("[id^='btn']").forEach(btnObj => {
        btnObj = new Buttons(btnObj, btnObj.textContent);
        btnObj.click(input);
    });
});

