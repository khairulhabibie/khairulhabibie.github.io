// Vanilla javascript
$(document).ready(() => {
  // main - section#cover
  $('#cover').html(`
  <div class="row">
  <img src="src/img/khairulhabibie.jpg" alt="Kharul Habibie" />
  </div>
  <h1>Khairul Habibie S.Si</h1>
  <h5><span class="hover">Front-end Engineer</span> | <span class="hover">jQuery</span></h5>`);

  $('#cover span')
    .first()
    .click(() => {
      icon = `question`;
      title = `Who is Front-end Engineer`;
      text = `someone who builds websites, designs apps, and ensures overall user accessibility`;
      alert(icon, title, text);
    });

  $('#cover span')
    .last()
    .click(() => {
      icon = `question`;
      title = `jQuery`;
      text = ` a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax`;
      alert(icon, title, text);
    });

  // main - article#table - #certificate
  $('#certificate').html(`
  <h2>Certificate</h2>
  <div class="row">
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Certificate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>2022</th>
          <td>Basics Web Development (Dicoding) <a id="c-3" class="button">Readmore...!</a></td>
        </tr>
        <tr>
          <th>2022</th>
          <td>Python Data Science - Machine Learning & Public Opinion Analysis (Sanbercode) <a id="c-2" class="button">Readmore...!</a></td>
        </tr>
        <tr>
          <th>2020</th>
          <td>Bachelor's degree in physics (Padjadjaran University) <a id="c-1" class="button">Readmore...!</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  `);

  // main - article#table - #training
  $('#training').html(`
  <h2>Training</h2>
  <div class="row">
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Training</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 4 -->
        <tr>
          <th>2022</th>
          <td>Font-End Web (Dicoding) <a id="t-4" class="button">Readmore...!</a></td>
        </tr>
        <!-- end row 4 -->
        <!-- row 3 -->
        <tr>
          <th>2022</th>
          <td>AWS re/start Program (Orbit Future Academy) <a id="t-3" class="button">Readmore...!</a></td>
        </tr>
        <!-- end row 3 -->
        <!-- row 2 -->
        <tr>
          <th>2022</th>
          <td>Responsive Web Design (Freecodecamp) <a id="t-2" class="button">Readmore...!</a></td>
        </tr>
        <!-- end row 2 -->
        <!-- row 1 -->
        <tr>
          <th>2022</th>
          <td>Data Science - Machine Learning & Public Opinion Analysis (sanbercode) <a id="t-1" class="button">Readmore...!</a></td>
        </tr>
        <!-- end row 1 -->
      </tbody>
    </table>
  </div>
  `);

  // main - article#table - #organization
  $('#organization').html(`
  <h2>Organization</h2>
  <div class="row">
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Organization</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 3 -->
        <tr>
          <th rowspan="2">2019</th>
          <td>Badan Eksekutif Mahasiswa Keluarga Mahasiswa Faculty of Math and Science, Padjadjaran University</td>
        </tr>
        <tr>
          <td>Staff of Academic and Reasoning Department <a id="o-3" class="button">Readmore...!</a></td>
        </tr>
        <!-- end row 3 -->
        <!-- row 2 -->
        <tr>
          <th rowspan="2">2018</th>
          <td>Shine (Wisdom, Insight Knowledge)</td>
        </tr>
        <tr>
          <td>Physics Mentor <a id="o-2" class="button">Readmore...!</a></td>
        </tr>
        <!-- end row 2 -->
        <!-- row 1 -->
        <tr>
          <th rowspan="2">2017</th>
          <td>Rohis Nurul Ilmi Faculty of Math and Science, Padjadjaran University</td>
        </tr>
        <tr>
          <td>Staff of Mentoring Center <a id="o-1" class="button">Readmore...!</a></td>
        </tr>
        <!-- end row 1 -->
      </tbody>
    </table>
  </div>
  `);

  // main - article#table - #work-experience
  $('#work-experience').html(`
  <h2>Work Experience</h2>
  <div class="row">
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Work Experience</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 2 -->
        <tr>
          <th>2019</th>
          <td>Laboratory Assistant of Advance Physics and Science in Padjadjaran University <a id="w-2" class="button">Readmore...!</a></td>
        </tr>
        <!-- end row 2 -->
        <!-- row 3 -->
        <tr>
          <th>2018</th>
          <td>Privat tutor in Insan Muda Briliant <a id="w-1" class="button">Readmore...!</a></td>
        </tr>
        <!-- end row 3 -->
      </tbody>
    </table>
  </div>
  `);

  // ----- btn in table
  // -- alert
  $('#c-3').attr({
    href: `https://www.dicoding.com/certificates/RVZK6MEVMZD5`,
    target: `_blank`,
  });

  $('#c-2').attr({
    href: `https://sanbercode.com/sertifikat/generate/26a91fb6-863f-4195-b4ef-fef5043c297b`,
    target: `_blank`,
  });

  $('#c-1').attr({
    href: `https://drive.google.com/file/d/1fn9qewsqy0E7CgmVpUAXtHWroZdpmm_F/view?usp=sharing`,
    target: `_blank`,
  });

  // --- position fixed
  var content = (text) => {
    $(`#box`).slideDown();
    $(`#box div`).html(text);
  };

  $(`.close`).click(function () {
    $(this).parent(`#box`).slideUp();
  });

  $(`#t-4`).click(() => {
    text = `<h5>Font-End Web (Decoding)</h5><br />
    <p>I learn HTML, CSS, Responsive Layout using Flexbox, Vanilla Javascript and Manipulation DOM, Web Storage</p><br/>

    <p><b>Skills: </b>HTML · CSS · Javascript</p>
    `;
    content(text);
  });

  $('#t-3').click(() => {
    text = `<h5>AWS re/Start Program Learner (title), Amazon Web Services (AWS) as educational institution</h5><br/>
    <p>a. Completed 12 week, full-time, classroom based skills development and training program on IT fundamentals, AWS Cloud, and professional skills.<p/><br/>
    <p>b. Built IT fundamental skills, including: working knowledge of Linux OS, writing scripts in Python and Shell.<p/><br/>

    <p>c. Learned how to apply core AWS services in the area of compute, storage and networking, including EC2, S3, IAM, VPC, Lamda, Cloud Formation, RDS and Route 53.</p><br/>

    <p>d. Demonstrated strong verbal and written communication skills, including the ability to explain technical alertrmation and terminology to non-technical end users.<p/><br/>

    <p>e. Learned how to configure monitor and support the suite of core AWS services</p><br />
    <p><b>Skills: </b>Networking · Network Security · Cloud Computing · Linux · Databases · Python (Programming Language)</p>`;
    content(text);
  });

  $('#t-2').click(() => {
    text = `<h5>Responsive Web Design</h5><br />
    <p>I learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.</p><br />

    <p>First, I build a cat photo app to learn the basics of HTML and CSS. Later, I learn modern techniques like CSS variables by building a penguin, and best practices for accessibility by building a quiz site.</p><br />

    <p>Finally, I learn how to make webpages that respond to different screen sizes by building a photo gallery with Flexbox, and a magazine article layout with CSS Grid.</p><br />
        
    <p><b>Skills: </b>CSS3 · HTML5</p>`;
    content(text);
  });

  $('#t-1').click(() => {
    text = `<h5>Learning Data Science - Machine Learning & Public Opinion Analysis</h5><br />
      <p>1. Data Management</p>
        <ul>
          <li>Basic SQL</li>
          <li>SQLite</li>
          <li>Excel with Python</li>
        </ul>
      <p>2. Get and Clean Data</p>
        <ul>
          <li>Scraping Web with BeautifulSoup</li>
          <li>Tweet with Tweepy</li>
          <li>API with Postman</li>
          <li>Text Preprocessing</li>
          <li>Corpus & Document Term Matrix</li>
        </ul>
      <p>3. Analysis</p>
        <ul>
          <li>Most & Top Word Data</li>
          <li>WordCloud</li>
          <li>Basic Graph Analysis with NetworkX</li>
          <li>Sentiment Analysis</li>
        </ul>
      <p>4. Machine Learning with Scikit Learn</p>
        <ul>
          <li>Unsupervised Learning with K-Means</li>
          <li>Supervised Learning With KNN & SVM</li>
          <li>Sentiment Analysis with Naive Bayes</li>
        </ul><br />
      <p><b>Skills: </b>Data Management · Analysis · Scikit-Learn · Python (Programming Language)</p>`;
    content(text);
  });

  // organizing
  $('#o-3').click(() => {
    icon = `info`;
    title = `Data not yet available`;
    text = `The description of my responsibilities in the Academic and Reasoning Department will be updated soon`;
    alert(icon, title, text);
  });

  $('#o-2').click(() => {
    icon = `info`;
    title = `Data not yet available`;
    text = `The description of my responsibilities in Shine (Wisdom, Insight Knowledge) will be updated soon`;
    alert(icon, title, text);
  });
  $('#o-1').click(() => {
    icon = `info`;
    title = `Data not yet available`;
    text = `The description of my responsibilities in Rohis Nurul Ilmi will be updated soon`;
    alert(icon, title, text);
  });

  // work eksperience
  $('#w-2').click(() => {
    text = `<h5>Laboratory Assistant of Advance Physics and Science in Padjadjaran University</h5><br />
    <p>Work in scientific laboratory assisting researchers during lab tests and experiments such as:</p><br />
    <p> · Settings preparing experiments,</p><br />
    <p> · Processing specimens, maintaining lab equipment,</p><br />
    <p> · Cleaning up after experiments, and</p><br />
    <p> · Give grades for reseachers report.</p>`;
    content(text);
  });

  $('#w-1').click(() => {
    text = `<h5>Privat tutor in Insan Muda Briliant</h5><br />
    <p>Private tutors work with less than 10 students helping them prepare for lessons, assignments, and other assessments.</p><br />
    <p> · Physics for senior high school</p><br />
    <p> · Math for junior high school</p>`;
    content(text);
  });
});
