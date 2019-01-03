<template>
  <div class="container">
    <h1 class="h1">Michael Drotar</h1>
    <div class="grid-2-3-xl">
      <div>
        <div class="resume-job">
          <div class="resume-job-duration">
            <div class="resume-job-duration-number">
              {{ currentJobYears }}
            </div>
            <div class="resume-job-duration-units">years</div>
            <div class="resume-job-duration-timeline">2011-Today</div>
          </div>
          <div class="resume-job-company">Radial</div>
          <div class="resume-job-role">Senior Web Architect</div>
          <ul class="resume-job-accomplishments">
            <li>Led team to develop an opinionated pattern library based on bootstrap</li>
            <li>Worked across design, ui, and api teams to architect order modification solution</li>
            <li>Mentored team of frontend developers to deliver robust, enterprise-quality code</li>
          </ul>
          <div class="resume-job-role">Senior Web Developer</div>
          <ul class="resume-job-accomplishments">
            <li>Designed and developed a frontend for a provisioning service configuration app that used Ember and integrated with LimeSurvey</li>
            <li>Designed modern a modern store locator feature, designed and developed a modern in-store pickup feature</li>
          </ul>
          <div class="resume-job-role">Web Developer</div>
          <ul class="resume-job-accomplishments">
            <li>Took initiative to also learn java backend and make necessary peer-reviewed code changes to facilitate frontend work</li>
            <li>Worked on a variety of different teams including filling in for a frontend lead during an extended vacation, architecting a solution to create a mobile-friendly version of the product, and integrating services across teams into a shared developer portal</li>
          </ul>
        </div>
        <div class="resume-job">
          <div class="resume-job-duration">
            <div class="resume-job-duration-number">2</div>
            <div class="resume-job-duration-units">years</div>
            <div class="resume-job-duration-timeline">2009-2011</div>
          </div>
          <div class="resume-job-company">Tata Consultancy Services</div>
          <div class="resume-job-role">MII Developer</div>
          <ul class="resume-job-accomplishments">
            <li>Engineered web interface from the ground up for interfacing with factory machines using MII's adapters</li>
            <li>Worked on-site with client to understand daily needs and drive product vision</li>
          </ul>
        </div>
        <div class="resume-job">
          <div class="resume-job-duration">
            <div class="resume-job-duration-number">1</div>
            <div class="resume-job-duration-units">year</div>
            <div class="resume-job-duration-timeline">2008-2009</div>
          </div>
          <div class="resume-job-company">Merion Publications, Inc.</div>
          <div class="resume-job-role">Web Developer</div>
          <ul class="resume-job-accomplishments">
            <li>Built weighted product search engine using .Net and SQL transactions</li>
            <li>Worked one-on-one with clients to understand needs and create helpful tools to improve their daily processes</li>
          </ul>
        </div>
      </div>
      <div>
        <!-- need forced spaces so justify alignment works -->
        <ul class="resume-proficiencies">
          <li class="good">accessability</li>&#32;
          <li>agile</li>&#32;
          <li class="better">alphabetization</li>&#32;
          <li>angular</li>&#32;
          <li class="best">architecture design</li>&#32;
          <li class="better">bootstrap</li>&#32;
          <li class="best">critical thinking</li>&#32;
          <li class="good">docker</li>&#32;
          <li>ember</li>&#32;
          <li>initiative</li>&#32;
          <li>knockout.js</li>&#32;
          <li class="best">mentoring</li>&#32;
          <li>node.js</li>&#32;
          <li class="best">project management</li>&#32;
          <li class="good">organization</li>&#32;
          <li class="best">problem solving</li>&#32;
          <li>requirements analysis</li>&#32;
          <li class="better">responsive design</li>&#32;
          <li class="good">ruby on rails</li>&#32;
          <li class="best">team building</li>&#32;
          <li>vue.js</li>&#32;
          <li class="good">web services</li>&#32;
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-resume',
  data: function() {
    var today = new Date();
    var startDate = new Date('11/07/2011');
    var elapsed = today - startDate;
    var millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    var currentJobYears = Math.round(elapsed / millisecondsInYear);

    return {
      currentJobYears
    };
  }
};
</script>

<style lang="scss">
.resume-contact {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-align: center;
}

.resume-contact-heading {
  flex: 1 100%;
  font-size: 1.6rem;
  font-weight: lighter;
  line-height: 1;
  margin-bottom: 1rem;
}

.resume-contact-item {
  flex: 1 50%;
  text-align: center;
}

.resume-job {
  margin-top: 3rem;
  position: relative;

  &:first-child {
    margin-top: 0;
  }
}

.resume-job-accomplishments {
  clear: both;
  display: block;
  list-style-type: none;
  margin: 1rem 0;
  padding: 0;

  > li {
    display: block;
    margin-top: 1rem;
    position: relative;
    text-align: justify;

    &::before {
      background-color: $color-lighter;
      content: '';
      display: inline-block;
      height: 0.3rem;
      margin-right: 0.5rem;
      width: 0.3rem;
    }
  }
}

.resume-job-company {
  font-size: 1.4rem;
  font-weight: lighter;
  line-height: 1;
}

.resume-job-duration {
  color: $color-lighter;
  float: left;
  margin-bottom: -0.5rem;
  margin-right: 1rem;
  margin-top: -0.5rem;
  text-align: center;
  width: 5rem;
}

.resume-job-duration-number {
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
}

.resume-job-duration-timeline {
  color: $color-light;
  font-size: 0.8rem;
  line-height: 3;
}

.resume-job-duration-units {
  font-weight: bold;
  line-height: 0.5;
}

.resume-proficiencies {
  color: $color-light;
  display: block;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: justify;

  > li {
    display: inline-block;
    font-size: 1.1rem;
    font-weight: lighter;
    letter-spacing: 0;

    &:nth-child(even) {
      font-size: 1.2rem;
    }

    &.good {
      font-size: 1.3rem;
      font-weight: normal;
    }

    &.better {
      font-size: 1.5rem;
      font-weight: normal;
    }

    &.best {
      font-size: 1.8rem;
      font-weight: lighter;
    }
  }

  @include media-breakpoint-up(xl) {
    font-size: 1rem;

    > li {
      display: block;
      margin: 0;
    }
  }
}

.resume-job-role {
  font-size: 1.6rem;
  font-weight: lighter;
  line-height: 1;
  margin-bottom: 1rem;
  padding-left: 6rem;
}

@include media-breakpoint-up(sm) {
  .resume-contact-heading {
    font-size: 2rem;
  }

  .resume-job {
    padding-left: 6rem;
  }

  .resume-job-company {
    font-size: 1.6rem;
  }

  .resume-job-duration {
    left: 0;
    position: absolute;
    top: 0;
  }

  .resume-job-role {
    font-size: 2rem;
    padding-left: 0;
  }
}

@include media-breakpoint-up(lg) {
  .resume-contact-heading {
    text-align: left;
  }

  .resume-contact-item {
    text-align: left;
  }
}
</style>
