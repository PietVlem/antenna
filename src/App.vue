<script setup>
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import useFieldValidation from '@/hooks/useFieldValidation'
import useAirtable from '@/hooks/useAirtable'

defineRule('required', required)
defineRule('email', email)

const { isRequired, validateEmail } = useFieldValidation()
const { createAirtableRecord } = useAirtable()

function onSubmit(values) {
  createAirtableRecord(values)
}
</script>

<template>
  <main>
    <div class="at-contact-form row">
      <Form @submit="onSubmit" class="at-contact-form__inner-wrapper" v-slot="{ errors }">
        <div class="form-group form-group--text">
          <label for="contact-first-name">Voornaam</label>
          <Field name="contact-first-name" id="contact-first-name" type="text" :rules="isRequired"
            :class="{ 'error': errors['contact-first-name'] }" />
          <ErrorMessage class="field-error" name="contact-first-name" />
        </div>
        <div class="form-group form-group--text">
          <label for="contact-name">Naam</label>
          <Field name="contact-name" id="contact-name" type="text" :class="{ 'error': errors['contact-name'] }"
            :rules="isRequired" />
          <ErrorMessage class="field-error" name="contact-name" />
        </div>
        <div class="form-group form-group--text">
          <label for="contact-email">Email</label>
          <Field name="contact-email" id="contact-email" type="email" :class="{ 'error': errors['contact-email'] }"
            :rules="isRequired" />
          <ErrorMessage class="field-error" name="contact-email" />
        </div>
        <div class="form-group form-group--text">
          <label for="contact-phone">Telefoon (optioneel)</label>
          <Field name="contact-phone" id="contact-phone" type="tel" />
          <ErrorMessage class="field-error" name="contact-phone" />
        </div>
        <div class="form-group form-group--text">
          <label for="contact-question">Uw vraag of opmerking</label>
          <Field as="textarea" name="contact-question" id="contact-question" :rules="isRequired"
            :class="{ 'error': errors['contact-question'] }" />
          <ErrorMessage class="field-error" name="contact-question" />
        </div>
        <div class="form-group form-group--chk">
          <Field name="contact-newsletter" id="contact-newsletter" type="checkbox" :value="true"
            :unchecked-value="false">
          </Field>
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
      </Form>
    </div>
  </main>
</template>

