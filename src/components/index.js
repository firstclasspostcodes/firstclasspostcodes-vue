import Vue from 'vue';
import PostcodeLookup from './PostcodeLookup';
import Input from './Input';
import AddressForm from './AddressForm';
import Select from './Select';

Vue.component('postcode-lookup', PostcodeLookup);
Vue.component('postcode-lookup-input', Input);
Vue.component('postcode-lookup-select', Select);
Vue.component('postcode-lookup-address-form', AddressForm);

export default PostcodeLookup;
