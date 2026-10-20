function createPostSurveyForm() {
  var form = FormApp.create('HairMela Data Protection Follow-up Survey');
  form.setDescription(
    'Hello again! This follow-up survey is part of the security and data protection project by ' +
    'Ayeni Ayomide, a cybersecurity trainee at Axiahub, carried out with HairMela\'s permission.\n\n' +
    'It takes about 5 minutes. It is voluntary and anonymous: please do not write your name or any ' +
    'customer details or passwords in your answers. Your answers are confidential and used only for this project.\n\n' +
    'Please answer based on how things are now, even if you answered a similar survey before.'
  );
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setConfirmationMessage('Thank you for your time. Your answers are confidential and will be used only for this project.');

  var CHOICES = ['Yes', 'Partly', 'No', 'Not sure'];

  function ask(text) {
    form.addMultipleChoiceItem().setTitle(text).setChoiceValues(CHOICES).setRequired(true);
  }
  function section(title) {
    form.addPageBreakItem().setTitle(title);
  }

  // Consent
  form.addCheckboxItem()
    .setTitle('Consent')
    .setChoiceValues(['I understand this is voluntary and anonymous, and I agree to take part.'])
    .setRequired(true);

  // Section A: awareness campaign (new in the follow-up)
  section('Section A: The awareness flyer');
  form.addMultipleChoiceItem()
    .setTitle('Did you see the data protection awareness flyer?')
    .setChoiceValues(['Yes, I read it', 'Yes, I only glanced at it', 'No'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Did the flyer teach you something new?')
    .setChoiceValues(['Yes', 'A little', 'No', 'I did not see it'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Since seeing it, have you changed anything in how you handle data (for example, locking your phone, not sharing customer details in personal chats)?')
    .setChoiceValues(['Yes', 'Not yet', 'No', 'I did not see it'])
    .setRequired(true);

  // Section B
  section('Section B: Personal data (NDPA 2023)');
  ask('Do we collect customers\' personal data (names, phone numbers, bookings, payments)?');
  ask('Do customers get a clear privacy notice explaining how their data is used?');
  ask('Do we ask for customers\' consent before collecting or using their data?');
  ask('Do we know how long different types of data are kept, and delete it afterwards?');
  ask('Is there a clear process for when a customer asks to see, correct or delete their data?');
  ask('Do we have written agreements with vendors that handle our data (hosting, payments, messaging)?');

  // Section C
  section('Section C: Access and passwords');
  ask('Does each person have their own login (no shared accounts)?');
  ask('Do we use strong passwords and two-factor authentication on important accounts?');
  ask('Is access limited to what each person\'s job needs?');
  ask('Is access removed immediately when someone leaves?');

  // Section D
  section('Section D: Devices and communication');
  ask('Are work devices protected with passwords or screen locks and kept updated?');
  ask('Are customer details sent or stored on personal WhatsApp or personal phones?');
  ask('Are important files and data backed up, and has a restore ever been tested?');
  ask('Do we avoid using public Wi-Fi for work tasks?');

  // Section E
  section('Section E: Incidents');
  ask('Do you know what to do if you suspect a data breach, a phishing email or a lost device?');
  ask('Is there a record (register) of security incidents?');
  ask('Do we know how and when a breach must be reported (for example, to the NDPC within 72 hours)?');

  // Section F
  section('Section F: Awareness and policies');
  ask('Have you received any security or data protection training?');
  ask('Is there a written security or data protection policy that you have read?');
  ask('Do you know who is responsible for data protection here?');

  // Section G: short feedback and confidence
  section('Section G: Your feedback');
  form.addParagraphTextItem()
    .setTitle('What is one thing you learned or will do differently? (optional)');
  form.addParagraphTextItem()
    .setTitle('What one change would make the biggest difference to data protection here? (optional)');
  form.addScaleItem()
    .setTitle('Overall, how confident are you in our data protection?')
    .setBounds(1, 5)
    .setLabels('Not at all', 'Very confident')
    .setRequired(true);

  Logger.log('Edit the form here: ' + form.getEditUrl());
  Logger.log('Send this link to respondents: ' + form.getPublishedUrl());
}
