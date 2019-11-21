import Ember from 'ember';

export function t(params, hash) {
  const [key] = params;
  return I18n.t(key, hash);
}

export default Ember.Helper.helper(t);
