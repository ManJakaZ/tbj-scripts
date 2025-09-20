/*! TBJ • Product Accordion (under .product-description, no white backgrounds) | v1.0.1 */
(() => {
  const ID = "tbj-accordion";
  const STYLE_ID = "tbj-accordion-style";
  const ACCENT = "#6f7bda";
  const DARK = "#2a2426";

  // 1) CSS — injected
  const css = `
  #${ID}{width:100%;margin:1rem 0 0;display:block;border:1px solid ${DARK};border-radius:6px;background:transparent;min-width:0;overflow:visible}
  #${ID} details{border-top:1px solid ${DARK};background:transparent;display:block;min-width:0}
  #${ID} details:first-child{border-top:none}
  #${ID} summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;padding:1rem 1.25rem;background:transparent;text-transform:uppercase;letter-spacing:.03em;min-width:0}
  #${ID} summary::-webkit-details-marker{display:none}
  #${ID} .title{display:flex;align-items:center;gap:.75rem;min-width:0}
  #${ID} .title-text{font-weight:500;white-space:normal;overflow-wrap:anywhere;word-break:break-word;min-width:0}
  #${ID} details[open] .title-text{font-weight:700}
  #${ID} .mini{width:18px;height:18px;display:inline-block;color:currentColor;transition:color .25s}
  #${ID} .chev{width:22px;height:22px;display:inline-block;flex:0 0 22px;color:currentColor;transition:transform .25s,color .25s}
  #${ID} details[open] .chev{transform:rotate(180deg)}
  #${ID} summary:hover .mini,#${ID} summary:hover .chev{color:${ACCENT}}
  #${ID} details[open] .mini,#${ID} details[open] .chev{color:${ACCENT}}
  #${ID} .content{border-top:1px solid ${DARK};padding:1.1rem 1.25rem 1.25rem;color:${DARK};font-size:.95rem;line-height:1.6;min-width:0;box-sizing:border-box;overflow-wrap:anywhere;word-break:break-word;white-space:normal;background:transparent}
  #${ID} .content *{max-width:100%}
  #${ID} .content p + p{margin-top:.75rem}
  .product-detail #${ID}{max-width:none;margin-inline:0;justify-self:stretch}
  @media (max-width:640px){
    #${ID} summary{padding:.9rem 1rem}
    #${ID} .content{padding:1rem}
    #${ID} .chev{width:24px;height:24px}
  }`;

  // 2) Markup — injected (FULL TEXT)
  const html = `
  <div id="${ID}">
    <!-- Variability -->
    <details>
      <summary>
        <span class="title">
          <!-- hair brush -->
          <svg class="mini" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04"/></svg>
          <span class="title-text">Variability</span>
        </span>
        <svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 15.5a1 1 0 0 1-.7-.29l-5-5a1 1 0 1 1 1.4-1.42l4.3 4.3 4.3-4.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-.7.29z"/></svg>
      </summary>
      <div class="content">
        <p>The actual colours of the product may differ from what you observe on your computer monitor or phone screen. This is due to variations in screen calibrations. To give you a clearer understanding, we provide indoor and outdoor natural lighting pictures for your review. If you need more clarity or additional photos, please don’t hesitate to message or email us, and we’ll be more than happy to assist.</p>
      </div>
    </details>

    <!-- Maintenance -->
    <details>
      <summary>
        <span class="title">
          <!-- scissors -->
          <svg class="mini" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 7a3 3 0 1 1 2.83 2H9l3 3 3-3h.17A3 3 0 1 1 18 7c0 .74-.27 1.42-.71 1.94L13 13l3.42 3.42A3 3 0 1 1 15 18.5l-3-3-3 3A3 3 0 1 1 6.71 16L10 12 6.71 8.71A3 3 0 0 1 6 7Z"/></svg>
          <span class="title-text">Maintenance</span>
        </span>
        <svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 15.5a1 1 0 0 1-.7-.29l-5-5a1 1 0 1 1 1.4-1.42l4.3 4.3 4.3-4.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-.7.29z"/></svg>
      </summary>
      <div class="content">
        <p>The hair length of our wigs is measured from the top middle crown on the lace/silk top to the longest ends. For instance, on a 3.5×5 lace front, the measurement is taken 2.5″ back from the hairline to the longest ends. Our wigs are custom coloured using professional-grade products. It’s normal for some colour to rinse out during the initial washes. While you can deposit colour onto the hair, we advise against lightening it since the hair has already undergone a lifting process to achieve its blonde shade. If you decide to have your wig coloured by a stylist, please note that Tresses by Juless (TBJ) will not be held responsible for any potential damage. We recommend only experienced wig colourists for such tasks.</p>
      </div>
    </details>

    <!-- Fit & Adjustments -->
    <details>
      <summary>
        <span class="title">
          <!-- tape measure / ruler -->
          <svg class="mini" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"/></svg>
          <span class="title-text">Fit & Adjustments</span>
        </span>
        <svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 15.5a1 1 0 0 1-.7-.29l-5-5a1 1 0 1 1 1.4-1.42l4.3 4.3 4.3-4.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-.7.29z"/></svg>
      </summary>
      <div class="content">
        <p>Tresses by Juless emphasises the importance of accurate head measurements. We cannot be held responsible for discrepancies arising from inaccurate measurements on your part. Ensure you measure correctly and select the appropriate cap size. Remember, not all seller caps fit the same, and not all lace fronts will sit perfectly on every individual. If your wig requires alterations, lace tightening, or any other adjustments, please reach out to TBJ. We’re here to ensure your wig fits you perfectly.</p>
      </div>
    </details>

    <!-- Return & Cancellation -->
    <details>
      <summary>
        <span class="title">
          <!-- return/undo arrow -->
          <svg class="mini" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 7h-7.59l2.3-2.29L12 3 7 8l5 5 1.71-1.71L11.41 9H19a4 4 0 0 1 0 8h-6v2h6a6 6 0 0 0 0-12z"/></svg>
          <span class="title-text">Return & Cancellation</span>
        </span>
        <svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 15.5a1 1 0 0 1-.7-.29l-5-5a1 1 0 1 1 1.4-1.42l4.3 4.3 4.3-4.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-.7.29z"/></svg>
      </summary>
      <div class="content">
        <p>We have a strict 3-day return policy. Before checking out, you’ll be prompted to thoroughly read and agree to TBJ’s return policy terms & conditions. If you’re considering returning the wig, please refrain from cutting the lace or making any alterations. There’s a 15% restocking fee for returns. However, we offer a one-time free exchange (excluding shipping fees) with store credit that doesn’t expire. Please note that once an order is placed, cancellations are not allowed. Even if the order hasn’t been shipped or if a duplicate order was made shortly after, a 15% cancellation penalty will apply. We appreciate your understanding in this matter.</p>
      </div>
    </details>
  </div>`;

  // 3) Helpers
  function ensureStyles() {
    if (!document.getElementById(STYLE_ID)) {
      const s = document.createElement("style");
      s.id = STYLE_ID;
      s.textContent = css;
      document.head.appendChild(s);
    }
  }
  function bindAccordion(root) {
    const items = Array.from(root.querySelectorAll("details"));
    items.forEach(d => {
      d.addEventListener("toggle", () => {
        if (!d.open) return;
        items.forEach(o => { if (o !== d) o.open = false; });
      });
    });
  }

  // 4) Insert under .product-description (Squarespace product page)
  function insert() {
    if (document.getElementById(ID)) return false;
    const pd = document.querySelector(".product-detail");
    if (!pd) return false;
    const desc = pd.querySelector(".product-description") || pd.firstElementChild;
    if (!desc) return false;
    ensureStyles();
    desc.insertAdjacentHTML("afterend", html);
    bindAccordion(document.getElementById(ID));
    return true;
  }

  // 5) Run on load + AJAX nav + late content
  const run = () => insert();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
  document.addEventListener("sqs:pageUpdate", run);
  const mo = new MutationObserver(() => { if (insert()) mo.disconnect(); });
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();
