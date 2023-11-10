fractional = document.getElementById("fractional")
chiefGrowth = document.getElementById("chief-growth")
chiefVisionary = document.getElementById("chief-visionary")

fractionalDescription = "Fractional leadership leverages external, experienced C-level executives to fill leadership gaps in your business in a part-time, contracted, non-exclusive capacity."
chiefGrowthDescription = "CGOs identify and pursue new opportunities for income generation and business expansion, increasing revenue streams and improving profitability."
chiefVisionaryDescription = "CVOs identify trends and opportunities—then strategize to seize them—while inspiring employees, attracting investors, and building a strong customer-centric brand."

hoverItems = [fractional, chiefGrowth, chiefVisionary]
hoverDescription = [fractionalDescription, chiefGrowthDescription, chiefVisionaryDescription]

body = document.querySelector('body')

hoverDescription.map((item) => {
    item.addEventListener('hover', () => {
        popupContainer = document.createElement("div")
        popupContainer.innerHTML = hoverDescription[0]
        body.appendChild(popupContainer)
    })
})