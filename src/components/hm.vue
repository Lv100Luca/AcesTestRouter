<template>
  <section class="address">
    <div class="address__field">
      <label for="name">Full name</label>
      <input
          type="text"
          id="name"
          :value="name"
          @input="$emit('update:name', $event.target.value)"
      />
    </div>
    <div class="address__field">
      <label for="address-line">Address Line 1</label>
      <input
          type="text"
          id="address-line"
          :value="addressLine"
          @input="$emit('update:addressLine', $event.target.value)"
      />
    </div>
    <div class="address__field">
      <label for="street-house-number">Street and house #</label>
      <input
          type="text"
          id="street-house-number"
          :value="streetNumber"
          @input="$emit('update:streetNumber', $event.target.value)"
      />
    </div>
    <div class="address__field">
      <label for="town-city">Town/City</label>
      <input
          type="text"
          id="town-city"
          :value="town"
          @input="$emit('update:town', $event.target.value)"
      />
    </div>
    <div class="address__field">
      <label for="country">Country</label>
      <input
          type="text"
          id="country"
          :value="country"
          @input="$emit('update:country', $event.target.value)"
      />
    </div>
    <div class="address__field">
      <label for="postcode">Postcode</label>
      <input
          type="text"
          id="postcode"
          :value="postcode"
          @input="$emit('update:postcode', $event.target.value)"
      />
    </div>
    <div class="address__field">
      <label for="phone-number">Phone number</label>
      <input
          type="text"
          id="phone-number"
          :value="phoneNumber"
          @input="$emit('update:phoneNumber', $event.target.value)"
      />
    </div>
    <div class="address__field">
      <label for="is-home-address">Is home address?</label>
      <input
          type="checkbox"
          id="is-home-address"
          :checked="homeAddress"
          @change="$emit('update:homeAddress', $event.target.checked)"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Address",
  props: {
    name: {
      type: String,
      default: ""
    },
    addressLine: {
      type: String,
      default: ""
    },
    streetNumber: {
      type: String,
      default: ""
    },
    town: {
      type: String,
      default: ""
    },
    country: {
      type: String,
      default: ""
    },
    postcode: {
      type: String,
      default: ""
    },
    phoneNumber: {
      type: String,
      default: ""
    },
    homeAddress: {
      type: Boolean,
      default: false,
    },
  }
};
</script>

<style lang="scss">
.address {
  margin: 5px auto;
  padding: 10px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__field {
    padding-bottom: 10px;
    width: 200px;
    text-align: left;

    label {
      display: block;
      font-weight: bold;
    }

    input[type="text"] {
      padding: 10px;
      width: 200px;
      border: 1px solid #fff;
      border-radius: 5px;
      outline: 0;
      background: #f0f8ff;
    }

    input[type="checkbox"] {}
  }
}
</style>