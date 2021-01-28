---
title: Nous contacter
date: 2019-05-12T12:14:34.000+06:00
description: Un enseignement professionnalisant et varié pour un avenir 100% numérique.
banner:
  title: Nous  <span class="font-weight-medium">contacter</span>
  title-line-twho: ''
  subtitle: Un enseignement professionnalisant et varié pour un avenir 100% numérique.
  image: "/images/contact_bg.png"
form:
  enable: true
  title: Formulaire de contact
  input:
  - icon: "/images/icn-user.png"
    placeholder: Votre nom de famille*
    type: text
    required: true
    name: last_name
    width: "50"
  - icon: "/images/icn-user.png"
    placeholder: Votre prénom*
    type: text
    required: true
    name: first_name
    width: "50"
  - icon: "/images/icn-mail.png"
    placeholder: Votre adresse e-mail*
    type: email
    required: true
    name: email
    width: "50"
  - icon: "/images/icn-mail.png"
    placeholder: Confirmer votre adresse e-mail*
    type: email
    required: true
    name: email_confirmation
    width: "50"
  - icon: "/images/icn-phone.png"
    placeholder: Votre numéro de téléphone
    type: phone
    required: false
    name: phone
    width: "50"
  - icon: "/images/icn-obj.png"
    placeholder: L'objet de votre message*
    type: text
    required: true
    name: object
    width: "100"
    className: w-lg-50
  - icon: "/images/icn-msg.png"
    placeholder: Votre message*
    textarea: true
    required: true
    name: message
    width: "100"
    type: ''
  checkbox:
  - content: En soumettant ce formulaire, j'accepte que les informations saisies soient
      exploitées dans le cadre d'apport d'information concernant les formations proposées
      par l'école.
    required: true
    name: RGPD
  - content: J'accepte recevoir les actualités de la Normandie Web School  ainsi que
      des publications à portée commerciales.
    required: false
    name: newsletter
  item:
  - image: "/images/icn-mail-blue.png"
    info: contact@normandiewebschool.fr
    subInfo: ''
  - image: "/images/icn-phone-blue.png"
    info: 02.79.02.73.78
    subInfo: 'Lun - Ven : 8h30-18h'
  - image: "/images/icn-marker-blue.png"
    info: Seine Innopolis <br/> 72 rue de la République <br/> 76140 Le Petit-Quevilly
    subInfo: ''
  button_text: Envoyer le message
  inscription_button_text: S'inscrire
menu:
  main:
    name: Contact
    URL: contact
    weight: 5
  desktop:
    name: Contact
    URL: contact
    weight: 3

---
