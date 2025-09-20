/*! TBJ • Floating “OUR T&C’s” Panel | v1.3.0 | all-in-one (CSS+HTML injected) */
(function () {
  // 0) Ensure a mount exists
  let mount = document.getElementById("tbj-tnc-fab-root");
  if (!mount) {
    mount = document.createElement("div");
    mount.id = "tbj-tnc-fab-root";
    document.body.appendChild(mount);
  }

  // 1) CSS (was <style>…</style> in your snippet; now injected here)
  const CSS_ID = "tbj-tnc-fab-style";
  const css = `
  :root{
    --tnc-z:2147483646; --tnc-radius:15px; --tnc-height:55vh; --tnc-height-mobile:72vh;
    --tnc-maxw:1100px; --tnc-gap:18px; --tnc-border:currentColor; --tnc-text:currentColor;
    --tnc-overlay:transparent; --tnc-panel-bg:rgba(0,0,0,.9); --tnc-chip-indicator:currentColor;
  }
  #tbj-tnc-fab-root,#tbj-tnc-fab-root *{box-sizing:border-box}
  .tnc-fab{position:fixed;right:var(--tnc-gap);bottom:var(--tnc-gap);z-index:var(--tnc-z);
    border:1px solid var(--tnc-border);color:var(--tnc-text);background:transparent;border-radius:999px;
    padding:12px 16px;font-weight:800;cursor:pointer;transition:transform .15s ease}
  .tnc-fab:hover{transform:translateY(-1px)}
  .tnc-overlay{position:fixed;inset:0;z-index:var(--tnc-z);background:var(--tnc-overlay);opacity:0;pointer-events:none;transition:opacity .2s ease}
  .tnc-overlay.is-open{opacity:1;pointer-events:auto}
  .tnc-panel{position:fixed;right:var(--tnc-gap);bottom:calc(var(--tnc-gap) + 56px);width:min(92vw,var(--tnc-maxw));
    height:var(--tnc-height);min-height:320px;border:1px solid var(--tnc-border);border-radius:var(--tnc-radius);
    color:var(--tnc-text);background:var(--tnc-panel-bg);overflow:hidden;z-index:calc(var(--tnc-z) + 1);
    opacity:0;transform:translateY(8px) scale(.995);pointer-events:none;transition:opacity .22s ease,transform .22s ease}
  .tnc-panel.is-open{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}
  .tnc-panel[hidden]{display:none !important}
  .tnc-head{display:flex;align-items:center;justify-content:space-between;padding:8px 10px}
  .tnc-title{margin:0;text-transform:uppercase;font-weight:800;letter-spacing:.05em}
  .tnc-close{border:1px solid var(--tnc-border);background:transparent;color:var(--tnc-text);
    width:32px;height:32px;border-radius:999px;font-size:18px;line-height:1;cursor:pointer}
  .tnc-window{height:calc(100% - 44px);display:flex;flex-direction:column}
  .tnc-tabswrap{display:flex;justify-content:center;padding:6px 10px 8px}
  .tnc-tabs{position:relative;display:flex;flex-wrap:wrap;gap:8px;padding:6px;border:1px solid var(--tnc-border);border-radius:999px;overflow:hidden}
  .tnc-tabs__indicator{position:absolute;top:6px;left:0;height:calc(100% - 12px);width:0;border-radius:999px;background:var(--tnc-chip-indicator);opacity:.18;transition:transform .28s cubic-bezier(.22,.61,.36,1),width .28s cubic-bezier(.22,.61,.36,1)}
  .tnc-tab{position:relative;z-index:1;border:0;background:transparent;padding:10px 16px;border-radius:999px;font-weight:700;white-space:nowrap;color:inherit;cursor:pointer}
  .tnc-tab:not(.is-active){opacity:.78}
  .tnc-mobile-picker{display:none;padding:8px 10px}
  .tnc-select{position:relative;display:block;max-width:700px;margin:0 auto;border:2px solid var(--tnc-border);border-radius:999px}
  .tnc-select__field{width:100%;appearance:none;background:transparent;border:0;outline:none;padding:12px 44px 12px 14px;font-weight:700;color:inherit}
  .tnc-select__chev{position:absolute;right:12px;top:50%;transform:translateY(-50%);font-weight:900}
  .tnc-panels{flex:1;min-height:0;padding:0 10px 12px}
  .tnc-panelbody{height:100%;overflow:auto;-webkit-overflow-scrolling:touch}
  .tnc-panelbody[hidden]{display:none !important}
  .tnc-inner{max-width:85ch;margin:0 auto}
  .tnc-title-h{text-transform:uppercase;font-weight:800;letter-spacing:.05em;margin:0 0 10px}
  .tnc-note{padding:12px;border-radius:10px;background:rgba(255,255,255,.06)}
  .tnc-panelbody ul{padding-left:1.2rem}
  @media (max-width:700px){
    .tnc-panel{right:10px;left:10px;bottom:calc(10px + 56px);width:auto;height:var(--tnc-height-mobile)}
    .tnc-tabswrap{display:none}.tnc-mobile-picker{display:block}
  }`;
  if (!document.getElementById(CSS_ID)) {
    const style = document.createElement("style");
    style.id = CSS_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }

  // 2) Markup (was your HTML; now injected)
  mount.innerHTML = `
    <button class="tnc-fab" id="tncFab" aria-haspopup="dialog" aria-controls="tncPanel" aria-expanded="false">OUR T&C’s</button>
    <div class="tnc-overlay" id="tncOverlay" aria-hidden="true"></div>

    <section class="tnc-panel" id="tncPanel" role="dialog" aria-modal="true" aria-labelledby="tncTitle" hidden>
      <header class="tnc-head">
        <h4 id="tncTitle" class="tnc-title">Terms and Conditions</h4>
        <button class="tnc-close" id="tncClose" aria-label="Close">×</button>
      </header>

      <div class="tnc-window">
        <div class="tnc-tabswrap">
          <div class="tnc-tabs" role="tablist" aria-label="Policies">
            <span class="tnc-tabs__indicator" aria-hidden="true"></span>
            <button class="tnc-tab is-active" role="tab" aria-selected="true" data-section="summary">Summary</button>
            <button class="tnc-tab" role="tab" aria-selected="false" data-section="checkout">Checkout</button>
            <button class="tnc-tab" role="tab" aria-selected="false" data-section="shipping">Shipping</button>
            <button class="tnc-tab" role="tab" aria-selected="false" data-section="lost">Lost &amp; Damages</button>
            <button class="tnc-tab" role="tab" aria-selected="false" data-section="returns">Returns &amp; Refunds</button>
            <button class="tnc-tab" role="tab" aria-selected="false" data-section="nonreturnable">Final Sale</button>
            <button class="tnc-tab" role="tab" aria-selected="false" data-section="defective">Defective</button>
            <button class="tnc-tab" role="tab" aria-selected="false" data-section="contact">Contact</button>
          </div>
        </div>

        <div class="tnc-mobile-picker" aria-hidden="true">
          <label class="tnc-select" aria-label="Select a policy">
            <select class="tnc-select__field">
              <option value="summary" selected>Summary</option>
              <option value="checkout">Checkout</option>
              <option value="shipping">Shipping</option>
              <option value="lost">Lost &amp; Damages</option>
              <option value="returns">Returns &amp; Refunds</option>
              <option value="nonreturnable">Final Sale</option>
              <option value="defective">Defective</option>
              <option value="contact">Contact</option>
            </select>
            <span class="tnc-select__chev" aria-hidden="true">▾</span>
          </label>
        </div>

        <div class="tnc-panels">
          <article class="tnc-panelbody" data-panel="summary">
            <div class="tnc-inner">
              <h4 class="tnc-title-h">QUICK SUMMARY</h4>
              <ul>
                <li><strong>Return window:</strong> 3 days from delivery (postmark with tracking required).</li>
                <li><strong>Condition:</strong> Unworn, unaltered, undamaged; no products/odors; lace uncut.</li>
                <li><strong>Restocking fee:</strong> <strong>15% of the product price</strong> on approved returns.</li>
                <li><strong>Exchange:</strong> One free exchange instead of the restocking fee (exchange is final sale).</li>
                <li><strong>Non-returnable:</strong> Discount/Afterpay/sale items, accessories, custom color/cut, pre-sale/pre-drop, altered/colored items.</li>
                <li><strong>Cancellations:</strong> Orders can’t be cancelled once placed; exceptional cases may incur a <strong>15% cancellation fee</strong>. Consultation cancellations may incur a 3% processor fee.</li>
                <li><strong>Consultations:</strong> By appointment only — <em>no walk-ins</em>. Book at
                  <a href="https://tressesbyjuless.as.me/" target="_blank" rel="noopener">tressesbyjuless.as.me</a>.
                </li>
              </ul>
            </div>
          </article>

          <article class="tnc-panelbody" data-panel="checkout" hidden aria-hidden="true">
            <div class="tnc-inner">
              <h4 class="tnc-title-h">CHECKOUT INFORMATION</h4>
              <p>At checkout, you will be asked to agree to the Terms &amp; Conditions, Return Policies, and Refunds as outlined below. These must be agreed to, or you will not be able to proceed through checkout.</p>
            </div>
          </article>

          <article class="tnc-panelbody" data-panel="shipping" hidden aria-hidden="true">
            <div class="tnc-inner">
              <h4 class="tnc-title-h">SHIPPING AND HANDLING</h4>
              <p>Please allow 2-5 business days for shipping once your order has been placed. Once the shipping label is created, you will receive a tracking number via the email or phone number you provided. All packages go out using USPS Priority Mail. Once your package has left TBJ we are no longer responsible for delays or scans. If you have scan/delay questions please contact USPS. The receiver is responsible for any Duty, Customs or Import charges. All additional charges based on the receiver’s country are out of our control and the sole responsibility of the receiver. If you would like to purchase additional insurance please contact TBJ at <a href="mailto:info@tressesnbyjuless.com">info@tressesnbyjuless.com</a>. Tresses by Juless is not responsible for how your piece is handled once shipped from our store and in the customers possession. Some shedding is normal and to be expected on a lace top or full lace wig with normal wear. The hairs are tied in one by one and are single knotted, so shedding will occur over time. It is recommended to be gentle with a lace top or full lace wig to avoid excessive shedding. We offer ventilation (tying hair back into the lace) services to maintain the wig for years if needed.</p>
            </div>
          </article>

          <article class="tnc-panelbody" data-panel="lost" hidden aria-hidden="true">
            <div class="tnc-inner">
              <h4 class="tnc-title-h">LOST PACKAGES AND DAMAGES</h4>
              <p>If the package is lost in transit it is the sole responsibility of the buyer to contact the carrier you chose at checkout to locate the package. Please do not ask us to do this for you. It is highly recommended to purchase additional insurance for your package. Email us at <a href="mailto:info@tressesnbyjuless.com">info@tressesnbyjuless.com</a> to purchase additional package insurance. All risk of loss or damage to the items in your order passes to you when we dispatch your order from our studio. We are not liable for any errors made by the carrier.</p>
            </div>
          </article>

          <article class="tnc-panelbody" data-panel="returns" hidden aria-hidden="true">
            <div class="tnc-inner">
              <h4 class="tnc-title-h">RETURNS AND REFUNDS</h4>
              <p>The wig or topper must be in the same condition you received it in (unaltered, unworn, undamaged, containing no signs of wear, styling products, or odor and lace uncut). Item(s) must be postmarked with tracking within 3 days of the order arrival date. Day 1 is the day delivered. No exceptions so please plan ahead if one of those days is a holiday or Sunday. All shipping costs are non-refundable. Signature required and insuring the package is highly recommended as TBJ is not resposible if the package is lost or not delivered. If you are an international customer and you do not select to pay import/brokerage fees and we are sent a bill you will be charged for these shipping charges as well as a restocking fee. Tresses by Juless will allow one exchange in lieu of a restocking fee once we have received the original piece. Exchangess are final sale - No Exceptions as this would be unfair to our other customers.</p>
              <p><strong>Restocking Fee:</strong> Approved returns incur a <strong>15% restocking fee</strong> (calculated on the product price; shipping/taxes excluded).</p>
            </div>
          </article>

          <article class="tnc-panelbody" data-panel="nonreturnable" hidden aria-hidden="true">
            <div class="tnc-inner">
              <h4 class="tnc-title-h">NON-RETURNABLE ITEMS AND FINAL SALE</h4>
              <p>Any wig or topper purchased using a discount code, Afterpay, sale items, or hair accessories cannot be returned. They are final sale. Custom Colored/Cut Wigs or toppers ordered are final sale and no refunds will be accepted. If the frontal lace was cut, the item was worn, sprayed with styling products, or damaged, it cannot be returned. Wigs and toppers that were colored or lightened by either yourself or a stylist are not eligible for return. Pre-sale and pre-drop items are also final sale. Refunds will be processed within 5 days of receipt if the item is in eligible and acceptable condition. A <strong>15% restocking fee</strong> and original shipping costs will be deducted to cover expenses. Cancelations for in-person and virtual consultations are subject to a 3% credit card cancelation fee.</p>
            </div>
          </article>

          <article class="tnc-panelbody" data-panel="defective" hidden aria-hidden="true">
            <div class="tnc-inner">
              <h4 class="tnc-title-h">DEFECTIVE PRODUCTS</h4>
              <p>If you believe you have received a defective product, please get in touch with us within 3 business days by email, and we will do our best to correct the problem. You have 7 calendar days from the date of delivery to contact us and send the product back for inspection if you feel the product is defective. After 7 calendar days from the date of delivery, you will not be eligible for any assistance or repairs to the product you purchased.</p>
              <p><strong>Please Note:</strong> The hand-tied hairs on a lace top wig or topper are the most delicate part of the hairpiece. Shedding in this area is a natural result of regular wear and tear and is a common occurrence in lace top wigs and toppers. To minimize shedding and prolong the life of your hairpiece, we strongly advise against brushing or pulling on the lace top aggressively, as this can cause premature hair loss.</p>
              <p>At <strong>Tresses by Juless</strong>, we offer professional maintenance services to help preserve the quality and longevity of your wig or topper. If you require assistance in maintaining your hairpiece, please reach out to us—we’re here to ensure your investment stays in the best condition for years to come.</p>
            </div>
          </article>

          <article class="tnc-panelbody" data-panel="contact" hidden aria-hidden="true">
            <div class="tnc-inner">
              <h4 class="tnc-title-h">CONTACT INFORMATION</h4>
              <p>To start a return, you can contact us at <a href="mailto:info@tressesnbyjuless.com">info@tressesnbyjuless.com</a>. We will try to get back to you within 24 hrs. You can also DM us at Tresses by Juless on Instagram for faster response time. If your return is accepted, we’ll send you instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted. Return your piece to <strong>Tresses by Juless, 199 Blue Ravine Rd #180, Folsom, CA 95630</strong>.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;

  // 3) Behavior
  const fab = document.getElementById("tncFab");
  const overlay = document.getElementById("tncOverlay");
  const panel = document.getElementById("tncPanel");
  const btnX = document.getElementById("tncClose");

  function escClose(e){ if (e.key === "Escape") closePanel(); }
  function openPanel(){
    overlay.classList.add("is-open");
    panel.hidden = false;
    requestAnimationFrame(() => panel.classList.add("is-open"));
    fab.setAttribute("aria-expanded","true");
    if (btnX) btnX.focus();
    initPolicies(panel);
    document.addEventListener("keydown", escClose);
  }
  function closePanel(){
    overlay.classList.remove("is-open");
    panel.classList.remove("is-open");
    setTimeout(() => { panel.hidden = true; }, 200);
    fab.setAttribute("aria-expanded","false");
    document.removeEventListener("keydown", escClose);
  }
  fab.addEventListener("click", openPanel);
  btnX.addEventListener("click", closePanel);
  overlay.addEventListener("click", closePanel);

  function initPolicies(scope){
    const tabsWrap = scope.querySelector(".tnc-tabs");
    const tabs = Array.from(scope.querySelectorAll(".tnc-tab"));
    const ind = scope.querySelector(".tnc-tabs__indicator");
    const panes = Array.from(scope.querySelectorAll(".tnc-panelbody"));
    const select = scope.querySelector(".tnc-select__field");

    panes.forEach(p => { if (p.getAttribute("data-panel") !== "summary") { p.hidden = true; p.setAttribute("aria-hidden","true"); } });

    function moveIndicator(btn){
      if (!ind || !btn || !tabsWrap || getComputedStyle(tabsWrap).display === "none") return;
      const x = btn.offsetLeft - (tabsWrap.scrollLeft || 0);
      ind.style.transform = `translateX(${x}px)`;
      ind.style.width = `${btn.offsetWidth}px`;
    }
    function syncTabs(name){
      tabs.forEach(b => {
        const on = b.getAttribute("data-section") === name;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-selected", String(on));
      });
      moveIndicator(tabs.find(b => b.classList.contains("is-active")));
    }
    function syncSelect(name){ if (select && select.value !== name) select.value = name; }
    function showPanelByName(name){
      panes.forEach(p => {
        const show = p.getAttribute("data-panel") === name;
        p.hidden = !show;
        p.setAttribute("aria-hidden", show ? "false" : "true");
      });
      syncTabs(name); syncSelect(name);
    }

    tabs.forEach(b => b.addEventListener("click", () => showPanelByName(b.getAttribute("data-section"))));
    if (select) select.addEventListener("change", () => showPanelByName(select.value));
    window.addEventListener("resize", () => moveIndicator(tabs.find(b => b.classList.contains("is-active")) || tabs[0]));
    const startBtn = tabs.find(b => b.classList.contains("is-active")) || tabs[0];
    requestAnimationFrame(() => moveIndicator(startBtn));

    const hash = (location.hash || "").slice(1);
    if (hash) {
      const btn = tabs.find(b => b.getAttribute("data-section") === hash);
      if (btn) showPanelByName(hash);
    }
  }
})();
