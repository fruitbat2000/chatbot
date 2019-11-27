<template>
  <div class="mental-health-options">
    <h2 class="primary--text">everything is going to be OK (eventually)</h2>
    <p>
      If you're feeling overwhelmed and out of control right now, then don't
      worry; a lot of the people who talk to me feel the same way. It can be
      very difficult to get the appropriate help/advice when your head's all
      over the place, so I have a couple of tools here that can help you find a
      better frame of mind from which to approach the problem.
    </p>
    <nav>
      <ul>
        <li>
          <a href="" @click.prevent="navigate('Cbt')"
            >Help me process my emotions</a
          >
        </li>
        <li>
          <a href="" @click.prevent="navigate('Breathe')"
            >Let's just breathe together</a
          >
        </li>
      </ul>
    </nav>
    <p>
      You should also try to answer these questions (adapted from this wonderful
      <a
        href="https://eponis.tumblr.com/post/113798088670/everything-is-awful-and-im-not-okay-questions-to"
        target="_blank"
        >blog post</a
      >
      ):
    </p>
    <dl>
      <dt>Are you hydrated?</dt>
      <dd>If not, have a glass of water</dd>
      <dt>Have you eaten in the past three hours?</dt>
      <dd>
        If not, get some food - something with protein, not just simple carbs
      </dd>
      <dt>Have you showered in the past day?</dt>
      <dd>If not, take a shower right now</dd>
      <dt>Have you moved your body to music in the past day?</dt>
      <dd>
        If not, do so. Put on something upbeat, turn up the volume and dance
        around the room
      </dd>
      <dt>Have you stretched your legs in the past day?</dt>
      <dd>
        If not, do so now. You don't have to run or go to the gym if that feels
        too much, just walk around the block, then keep walking as long as you
        please.
      </dd>
      <dt>Have you said something nice to someone in the past day?</dt>
      <dd>
        Do so, whether online or in person. Make it genuine; wait until you see
        something really wonderful about someone, and tell them about it
      </dd>
      <dt>Have you cuddled a living being in the past two days?</dt>
      <dd>
        If not, do so. Don't be afraid to ask for hugs from friends or friends'
        pets. Most of them will enjoy the cuddles too; you're not imposing on
        them
      </dd>
      <dt>Do you feel ineffective?</dt>
      <dd>
        Pause right now and get something small completed, whether it's
        responding to an email, loading up the dishwasher, or packing your gym
        pbag for your next trip. Good job!
      </dd>
      <dt>Do you feel paralyzed by indecision?</dt>
      <dd>
        Give yourself ten minutes to sit back and figure out a game plan for the
        day. If a particular decision or problem is still being a roadblock,
        simple set it aside for now, and pick something else that seems doable.
        Right now, the important part is to break through that stasis, even it
        it means doing something trivial
      </dd>
      <dt>
        Have you been over-exerting yourself lately - physically, emotionally,
        socially or intellectually?
      </dt>
      <dd>
        That can take a toll that lingers for days. Give yourself a break in
        that area, whether it's physical rest, taking time alone, or relaxing
        with some silly entertainment
      </dd>
    </dl>
    <nav>
      <ul>
        <li>
          <a href="" @click.prevent="navigate('Cbt')"
            >Help me process my emotions</a
          >
        </li>
        <li>
          <a href="" @click.prevent="navigate('Breathe')"
            >Let's just breathe together</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MentalHealthOptions',
  setup(props, context) {
    const store = context.root.$store

    function navigate(destination) {
      store.commit('navigate', destination)
    }

    return { navigate }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mental-health-options {
  padding: 20px;

  h2 {
    margin-bottom: 20px;
  }

  ul {
    background-color: $lightGrey;
    list-style: none;
    margin-bottom: 20px;
    padding: 20px;

    li {
      margin-bottom: 5px;
    }
  }

  dl {
    dt {
      color: $primary;
      font-weight: bold;
    }

    dd {
      color: $secondary;
      margin-bottom: 10px;
    }
  }
}
</style>
