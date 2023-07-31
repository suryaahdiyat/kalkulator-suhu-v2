const cs = document.querySelectorAll(".c-user");
cs.forEach((c) =>
    c.addEventListener("click", function () {
        const dropdown = this.previousElementSibling;
        if (dropdown.classList.contains("hidden")) {
            dropdown.classList.remove("hidden");
            const btns = dropdown.children;
            const t = this.previousElementSibling.previousElementSibling;
            for (let i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function () {
                for (let j = 0; j < btns.length; j++) {
                    if (btns[j].classList.contains("active"))
                    btns[j].classList.remove("active");
                }
                this.classList.add("active");
                t.innerHTML = this.innerHTML;
                dropdown.classList.add("hidden");
                });
            }
        } else dropdown.classList.add("hidden");
    })
);

const hitung = document.getElementById("hitung");
hitung.addEventListener("click", () => {
    const active = document.querySelectorAll(".active");
    const i_user = document.getElementById("i-user");
    const o_user = document.getElementById("o-user");
    const title = document.getElementById("title")
    const formula = document.getElementById("formula")
    if (!i_user.value) alert("Input Tidak Boleh Kosong");
    else {
        o_user.value = hasil(
        active[0].innerHTML,
        active[1].innerHTML,
        Number.parseInt(i_user.value)
        );
    }
    title.innerHTML = cTitle(active[0].innerHTML, active[1].innerHTML)
    formula.innerHTML = cP(active[0].innerHTML, active[1].innerHTML)
});

const hasil = (fChoice, sChoice, input) => {
    if (fChoice == "celcius") {
        if (sChoice == fChoice) return input;
        if (sChoice == "reamure") return (4 / 5) * input;
        if (sChoice == "fahrenheit") return (9 / 5) * input + 32;
        return input + 273;
    }
    if (fChoice == "reamure") {
        if (sChoice == fChoice) return input;
        if (sChoice == "celcius") return (5 / 4) * input;
        if (sChoice == "fahrenheit") return (9 / 4) * input + 32;
        return (5 / 4) * input + 273;
    }
    if (fChoice == "fahrenheit") {
        if (sChoice == fChoice) return input;
        if (sChoice == "celcius") return (5 / 9) * (input - 32);
        if (sChoice == "reamure") return (4 / 9) * (input - 32);
        return (5 / 9) * (input - 32) + 273;
    }
    if (fChoice == "kelvin") {
        if (sChoice == fChoice) return input;
        if (sChoice == "celcius") return input - 273;
        if (sChoice == "reamure") return 4 / 5(input - 273);
        return (9 / 5) * (input - 273) + 32;
    }
};


const cP = (fChoice, sChoice) => {
    if (fChoice == "celcius") {
        if (sChoice == fChoice) return ""
        if(sChoice == "reamure") return "Re = 4/5 C"
        if(sChoice == "fahrenheit") return "F = 9/5 C + 32"
        return "K = C + 273"
    }
    if(fChoice == "reamure"){
        if (sChoice == fChoice) return ""
        if(sChoice == "celcius") return "C = 5/4 Re"
        if(sChoice == "fahrenheit") return "F = 9/4 Re + 32"
        return "K = 5/4 Re + 273"
    }
    if(fChoice == "fahrenheit"){
        if (sChoice == fChoice) return "" 
        if(sChoice == "celcius") return "C = 5/9 (F - 32)"
        if(sChoice == "reamure") return "Re = 4/9 (F - 32)"
        return "K = 5/9 (F - 32) + 273"
    }
    if(fChoice == "kelvin"){
        if (sChoice == fChoice) return ""   
        if(sChoice == "celcius") return "C = K - 273"
        if(sChoice == "reamure") return "Re = 4/5 (K - 273)"
        return "F = 9/5 (K - 273) + 32"
    }
}
const cTitle = (fChoice, sChoice) => {
    if (fChoice == "celcius") {
        if (sChoice == fChoice) return "Celcius -&gt; Celcius"
        if(sChoice == "reamure") return "Celcius -&gt; Reamure"
        if(sChoice == "fahrenheit") return "Celcius -&gt; Fahrenheit"
        return "Celcius -&gt; Kelvin"
    }
    if(fChoice == "reamure"){
        if (sChoice == fChoice) return "Reamure -&gt; Reamure"
        if(sChoice == "celcius") return "Reamure -&gt; Celcius"
        if(sChoice == "fahrenheit") return "Reamure -&gt; Fahrenheit"
        return "Reamure -&gt; Kelvin"
    }
    if(fChoice == "fahrenheit"){
        if (sChoice == fChoice) return "Fahrenheit -&gt; Fahrenheit" 
        if(sChoice == "celcius") return "Fahrenheit -&gt; Celcius"
        if(sChoice == "reamure") return "Fahrenheit -&gt; Reamure"
        return "Fahrenheit -&gt; Kelvin"
    }
    if(fChoice == "kelvin"){
        if (sChoice == fChoice) return "Kelvin -&gt; Kelvin"   
        if(sChoice == "celcius") return "Kelvin -&gt; Celcius"
        if(sChoice == "reamure") return "Kelvin -&gt; Reamure"
        return "Kelvin -&gt; Fahrenheit"
    }
}

const all_html = document.querySelector("html")
const btn_toggle = document.querySelector("#toggle")
btn_toggle.addEventListener("click", () => {
    btn_toggle.checked ? all_html.classList.add("dark") : all_html.classList.remove("dark")
})
