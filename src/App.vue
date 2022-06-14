<script setup>

</script>

<template>
  <main>
    <div class="at-contact-form row">
      <form class="at-contact-form__inner-wrapper">
        <div class="form-group form-group--text">
          <label for="contact-first-name">Voornaam</label>
          <input id="contact-first-name" type="text" required>
        </div>
        <div class="form-group form-group--text">
          <label for="contact-name">Naam</label>
          <input id="contact-name" type="text" required>
        </div>
        <div class="form-group form-group--text">
          <label for="contact-email">Email</label>
          <input id="contact-email" type="text" required>
        </div>
        <div class="form-group form-group--text">
          <label for="contact-phone">Telefoon (optioneel)</label>
          <input id="contact-phone" type="text">
        </div>
        <div class="form-group form-group--text">
          <label for="contact-question">Uw vraag of opmerking</label>
          <textarea name="contact-question" id="contact-question" cols="50" rows="10"></textarea>
        </div>
        <div class="form-group form-group--chk">
          <input id="contact-newsletter" type="checkbox">
          <label for="contact-newsletter">Schrijf me in voor de nieuwsbrief</label>
        </div>
        <div class="form-group">
          Google recaptcha...
        </div>
        <div class="form-group">
          <button>
            <span>Versturen</span>
            <svg width="28" height="16" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#45e8a5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 7.8h25.6M20.6 14.6 27 7.8 20.6 1" />
              </g>
            </svg>
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

