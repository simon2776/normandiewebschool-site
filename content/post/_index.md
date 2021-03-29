---
title: "{{ replace .Name "-" " " | title }}"
type: page
description: L’admission se fait en dehors de Parcours Sup. Pas de frais pour le traitement
  du dossier d’admission. Les admissions débutent le 28 janvier 2021 et se terminent
  le 20 juillet 2021.
banner:
  title: Admission
  title-line-twho: ''
  subtitle: L’admission se fait en dehors de Parcours Sup. Pas de frais pour le traitement
    du dossier d’admission. Les admissions débutent le 28 janvier 2021 et se terminent
    le 20 juillet 2021.
  image: uploads/cursus-initial.jpg
  testimonials:
  enable: true
  testimonails: []
date: {{ .Date }}
archives: "{{ dateFormat "2006" now }}"
---
