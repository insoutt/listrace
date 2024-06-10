import TitleSection from "../title-section";

const items = [
  {
    id: 1,
    icon: <svg className="size-9 fill-gray-700 group-hover:fill-primary" viewBox="0 0 512 512"><g><g><path d="M223.718,124.76c-48.027,11.198-86.688,49.285-98.494,97.031c-11.843,47.899,1.711,96.722,36.259,130.601			C173.703,364.377,181,383.586,181,403.777V407c0,13.296,5.801,25.26,15,33.505V467c0,24.813,20.187,45,45,45h30			c24.813,0,45-20.187,45-45v-26.495c9.199-8.245,15-20.208,15-33.505v-3.282c0-19.884,7.687-39.458,20.563-52.361			C376.994,325.87,391,292.005,391,256C391,169.921,311.231,104.362,223.718,124.76z M286,467c0,8.271-6.729,15-15,15h-30			c-8.271,0-15-6.729-15-15v-15h60V467z M330.326,330.166C311.689,348.843,301,375.651,301,403.718V407c0,8.271-6.729,15-15,15h-60			c-8.271,0-15-6.729-15-15v-3.223c0-28.499-10.393-55.035-28.513-72.804c-26.89-26.37-37.409-64.493-28.141-101.981			c9.125-36.907,39.029-66.353,76.184-75.015C299.202,137.964,361,189.228,361,256C361,284.004,350.106,310.343,330.326,330.166z"></path></g></g><g><g><path d="M139.327,118.114L96.9,75.688c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l42.427,42.426			c5.857,5.858,15.356,5.858,21.213,0C145.185,133.469,145.185,123.972,139.327,118.114z"></path></g></g><g><g><path d="M76,241H15c-8.284,0-15,6.716-15,15s6.716,15,15,15h61c8.284,0,15-6.716,15-15S84.284,241,76,241z"></path></g></g><g><g><path d="M497,241h-61c-8.284,0-15,6.716-15,15s6.716,15,15,15h61c8.284,0,15-6.716,15-15S505.284,241,497,241z"></path></g></g><g><g><path d="M436.313,75.688c-5.856-5.858-15.354-5.858-21.213,0l-42.427,42.426c-5.858,5.857-5.858,15.355,0,21.213			c5.857,5.858,15.355,5.858,21.213,0l42.427-42.426C442.171,91.044,442.171,81.546,436.313,75.688z"></path></g></g><g><g><path d="M256,0c-8.284,0-15,6.716-15,15v61c0,8.284,6.716,15,15,15s15-6.716,15-15V15C271,6.716,264.284,0,256,0z"></path></g></g><g><g><path d="M256,181c-6.166,0-12.447,0.739-18.658,2.194c-25.865,6.037-47.518,27.328-53.879,52.979			c-1.994,8.041,2.907,16.175,10.947,18.17c8.042,1.994,16.176-2.909,18.17-10.948c3.661-14.758,16.647-27.5,31.593-30.989			C248.155,211.473,252.135,211,256,211c8.284,0,15-6.716,15-15S264.284,181,256,181z"></path></g></g></svg>,
    title: 'Choose what to Do',
    description: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
    url: '#',
  },
  {
    id: 2,
    icon: <svg className="size-9 fill-gray-700 group-hover:fill-primary" viewBox="0 0 512 512"><g><g><path d="M110.503,216.962c-36.867,0-66.861,29.994-66.861,66.862c0,36.867,29.994,66.861,66.861,66.861			c36.867,0,66.862-29.994,66.862-66.861C177.364,246.956,147.371,216.962,110.503,216.962z M110.503,318.685			c-19.222,0-34.861-15.638-34.861-34.861c0-19.222,15.638-34.862,34.861-34.862c19.222,0,34.862,15.638,34.862,34.862			C145.364,303.045,129.726,318.685,110.503,318.685z"></path></g></g><g><g><path d="M401.513,173.322c-0.001,0-0.001,0-0.002,0h-63.039v-18.313c0-20.586-16.748-37.333-37.333-37.333h-90.253			c-20.586,0-37.333,16.748-37.333,37.333v18.313h-63.039h-0.001c-0.001,0-0.003,0-0.005,0C49.573,173.322,0,222.895,0,283.828			c0,60.928,49.573,110.496,110.507,110.496c46.731,0,87.651-28.997,103.546-71.883h83.909			c15.906,42.889,56.823,71.883,103.542,71.883c60.928,0,110.496-49.568,110.496-110.496			C512.001,222.897,462.437,173.326,401.513,173.322z M205.552,155.009L205.552,155.009c0-2.941,2.393-5.333,5.333-5.333h90.253			c2.941,0,5.333,2.393,5.333,5.333v18.313H205.552V155.009z M186.734,302.629c-8.623,35.147-39.969,59.695-76.226,59.695			c-43.289,0-78.507-35.214-78.507-78.496c0-43.288,35.218-78.507,78.507-78.507c43.282,0,78.496,35.218,78.496,78.507			C189.004,290.181,188.241,296.503,186.734,302.629z M291.207,290.442h-70.395c1.871-31.387-9.591-62.301-32.609-85.12			c1.114,0,127.098,0,135.616,0C300.693,228.448,289.333,258.981,291.207,290.442z M401.505,362.324			c-36.227,0-67.555-24.519-76.211-59.639c-0.005-0.021-0.006-0.043-0.012-0.064c-1.505-6.117-2.268-12.439-2.268-18.793			c0-43.287,35.212-78.505,78.493-78.507C444.788,205.323,480,240.541,480,283.828C480.001,327.11,444.787,362.324,401.505,362.324z			"></path></g></g><g><g><path d="M401.508,216.962c-36.867,0-66.861,29.994-66.861,66.862c0,36.867,29.994,66.861,66.861,66.861			s66.862-29.994,66.862-66.861C468.37,246.956,438.377,216.962,401.508,216.962z M401.508,318.685			c-19.222,0-34.861-15.638-34.861-34.861c0-19.222,15.638-34.862,34.861-34.862s34.862,15.638,34.862,34.862			C436.37,303.045,420.732,318.685,401.508,318.685z"></path></g></g><g><g><path d="M266.435,231.882h-20.848c-8.836,0-16,7.164-16,16c0,8.836,7.164,16,16,16h20.848c8.836,0,16-7.164,16-16			C282.435,239.045,275.272,231.882,266.435,231.882z"></path></g></g></svg>,
    title: 'Find what you want',
    description: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
    url: '#',
  },
  {
    id: 3,
    icon: <svg className="size-9 fill-gray-700 group-hover:fill-primary" viewBox="0 0 128 128"><path d="M64,90a1.99953,1.99953,0,0,0,1.56061-.749C66.59918,87.95459,91.00055,57.34473,91.00055,43a27.00055,27.00055,0,0,0-54.0011,0c0,14.34473,24.40137,44.95459,25.43994,46.251A1.99953,1.99953,0,0,0,64,90Zm0-70A23.0264,23.0264,0,0,1,87.00043,43c0,10.00342-15.367,31.91064-23.00043,41.76611C56.36609,74.9126,40.99957,53.0083,40.99957,43A23.0264,23.0264,0,0,1,64,20Z"></path><path d="M81.00037,42A17.00037,17.00037,0,1,0,64,59,17.0192,17.0192,0,0,0,81.00037,42ZM50.99976,42A13.00024,13.00024,0,1,1,64,55,13.01455,13.01455,0,0,1,50.99976,42Z"></path><path d="M66.00006,35A2.00015,2.00015,0,0,0,64,33a9.01055,9.01055,0,0,0-9.00018,9,2,2,0,0,0,4.00006,0,4.95094,4.95094,0,0,1,1.14642-3.14636l.70728-.70728A4.95106,4.95106,0,0,1,64,37,2.00015,2.00015,0,0,0,66.00006,35Z"></path><path d="M18.4566,63.17041.30975,105.83691a3.81436,3.81436,0,0,0,.35352,3.65234A6.44441,6.44441,0,0,0,6.08429,112H121.91571a6.44441,6.44441,0,0,0,5.421-2.51074,3.81436,3.81436,0,0,0,.35352-3.65234l-18.14685-42.667C108.73621,61.27393,106.41589,60,103.76886,60H89.73468c-1.162,2.32709-2.45709,4.678-3.81879,6.997l2.64026,6.33649H81.99335c-.89026,1.37219-1.782,2.709-2.663,4H90.22284l7.22223,17.333H30.55493l7.22223-17.333H48.66949c-.881-1.291-1.77264-2.62781-2.663-4H39.44385L42.08411,66.997c-1.36169-2.319-2.65668-4.66992-3.81879-6.997H24.23114C21.58411,60,19.26379,61.27393,18.4566,63.17041ZM20.66583,108H6.08429a2.81419,2.81419,0,0,1-2.05957-.67773L7.70618,98.6665H24.55487Zm103.30945-.67773A2.81419,2.81419,0,0,1,121.91571,108H107.33417l-3.889-9.3335h16.84875ZM89.00043,64h14.76843a2.61781,2.61781,0,0,1,2.09381.73584l3.65668,8.59766H92.88947Zm5.55579,13.3335h16.66437l7.37207,17.333H101.77838Zm4.55554,21.333L103.00085,108H24.99915l3.8891-9.3335Zm-72.89014-4H9.40741l7.37213-17.333H33.44379ZM38.99957,64l-3.889,9.3335H18.48077l3.65656-8.59717A2.61568,2.61568,0,0,1,24.23114,64Z"></path></svg>,
    title: 'Explore amazing Place',
    description: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
    url: '#',
  },
]
const HowItWorks = () => {
  return (<>
    <section id="how-it-works" className="container text-gray-600 pb-24">
      <TitleSection
        title="HOW IT WORKS"
        description="Learn More about how our website works"
      />

      <div className="mt-[72px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map(({id, icon, title, description}) => (<div key={id} className="text-center rounded-sm border hover:bg-primary shadow py-[50px] px-[42px] group duration-500">
            <div className="rounded-full bg-gray-100 group-hover:bg-white size-20 mx-auto flex items-center justify-center">
              {icon}
              {/* <Icon className="size-[35px] group-hover:fill-primary" aria-hidden="true"/> */}
            </div>
            <a href="#">
              <h2 className="mt-[35px] mb-5 text-lg group-hover:text-white">{title}</h2>
            </a>
            <p className="text-gray-600 group-hover:text-white mb-[25px] text-sm">{description}</p>
            <div>
              <button className="border px-4 py-2 text-xs group-hover:bg-white group-hover:text-primary">Read More</button>
            </div>
          </div>))}
        </div>
      </div>
    </section>
  </>);
}

export default HowItWorks;