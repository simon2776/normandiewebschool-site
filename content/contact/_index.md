---
title: Nous contacter
date: 2019-05-12T12:14:34.000+06:00
description: Contacter l'école du numérique de Rouen. Venez rencontrer l'équipe pédagogique.
banner:
  title: Nous  <span class="font-weight-medium">contacter</span>
  title-line-twho: ''
  subtitle: Contacter l'école du numérique de Rouen. Venez rencontrer l'équipe pédagogique.
  image: "/uploads/contact_bg.png"
form:
  enable: true
  title: Formulaire de contact
  input:
  - icon: "/uploads/icn-user.png"
    placeholder: Votre nom de famille*
    type: text
    required: true
    name: last_name
    width: "50"
    padding: pr-lg-1
  - icon: "/uploads/icn-user.png"
    placeholder: Votre prénom*
    type: text
    required: true
    name: first_name
    width: "50"
    padding: pl-lg-1
  - icon: "/uploads/icn-mail.png"
    placeholder: Votre adresse e-mail*
    type: email
    required: true
    name: email
    width: "50"
    padding: pr-lg-1
  - icon: "/uploads/icn-mail.png"
    placeholder: Confirmer votre adresse e-mail*
    type: email
    required: true
    name: email_confirmation
    width: "50"
    padding: pl-lg-1
  - icon: "/uploads/icn-phone.png"
    placeholder: Votre numéro de téléphone
    type: phone
    required: false
    name: phone
    width: "50"
  - icon: "/uploads/icn-obj.png"
    placeholder: L'objet de votre message*
    type: text
    required: true
    name: object
    width: "100"
    className: w-lg-50
  - icon: "/uploads/icn-msg.png"
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
  - content: J'accepte de recevoir les actualités de la Normandie Web School  ainsi
      que des publications à portée commerciale.
    required: false
    name: newsletter
  item:
  - image: "/uploads/icn-mail-blue.png"
    info: contact@normandiewebschool.fr
    subInfo: ''
  - image: "/uploads/icn-phone-blue.png"
    info: 02 79 02 73 78
    subInfo: 'Lun - Ven : 8h30 - 17h'
  - image: "/uploads/icn-marker-blue.png"
    info: ''
    subInfo: 22 Place Henri Gadeau de Kerville <br/> 76100 ROUEN
  button_text: Envoyer le message
  inscription_button_text: Candidater
seo_image: ''
menu:
  desktop:
    URL: contact
    weight: 3
  main:
    URL: contact
    weight: 9

---
