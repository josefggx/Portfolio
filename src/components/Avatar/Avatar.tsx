export const Avatar = () => {
  return (
    <svg
      width="170"
      height="170"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMax meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(100, 65)">
        <g id="vue-color-avatar-face">
          <g clipPath="url(#clip0)">
            <title>face - base</title>
            <path
              d="M154 319.5C139.6 299.5 128.333 260.834 127 241.5L58.5 212L30 319.5H154Z"
              fill="#ffcebc"
              stroke="black"
              strokeWidth="4"
            ></path>
            <mask
              id="mask0"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="30"
              y="212"
              width="124"
              height="118"
            >
              <path
                d="M154 329.5C139.6 309.5 128.333 260.834 127 241.5L58.5 212L30 329.5H154Z"
                fill="#ffcebc"
              ></path>
            </mask>
            <g mask="url(#mask0)">
              <g style={{ mixBlendMode: 'multiply' }}>
                <ellipse
                  cx="124"
                  cy="210"
                  rx="59"
                  ry="54"
                  fill="black"
                ></ellipse>
              </g>
            </g>
            <mask id="path-4-inside-1" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M183.886 150.917C183.859 150.801 183.831 150.685 183.803 150.569C183.776 150.454 183.748 150.338 183.719 150.222L167.323 81.7855C167.306 81.7177 167.29 81.6499 167.274 81.5821C167.258 81.5142 167.242 81.4465 167.225 81.3787L167.152 81.0752L167.151 81.0755C156.933 39.6308 115.156 14.1472 73.5821 24.1081C32.0078 34.0689 6.31547 75.7174 15.9883 117.293L15.9863 117.293L32.9776 188.211L32.9916 188.208C43.5944 229.112 85.0616 254.149 126.329 244.261C167.597 234.374 193.216 193.264 184.131 151.996L184.144 151.993L183.886 150.917Z"
              ></path>
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M183.886 150.917C183.859 150.801 183.831 150.685 183.803 150.569C183.776 150.454 183.748 150.338 183.719 150.222L167.323 81.7855C167.306 81.7177 167.29 81.6499 167.274 81.5821C167.258 81.5142 167.242 81.4465 167.225 81.3787L167.152 81.0752L167.151 81.0755C156.933 39.6308 115.156 14.1472 73.5821 24.1081C32.0078 34.0689 6.31547 75.7174 15.9883 117.293L15.9863 117.293L32.9776 188.211L32.9916 188.208C43.5944 229.112 85.0616 254.149 126.329 244.261C167.597 234.374 193.216 193.264 184.131 151.996L184.144 151.993L183.886 150.917Z"
              fill="#ffcebc"
            ></path>
            <path
              d="M183.886 150.917L179.992 151.831L179.994 151.84L179.996 151.849L183.886 150.917ZM183.719 150.222L179.83 151.154L179.832 151.163L179.834 151.172L183.719 150.222ZM167.323 81.7855L163.43 82.7076L163.433 82.7175L167.323 81.7855ZM167.274 81.5821L163.384 82.5141L163.384 82.5142L167.274 81.5821ZM167.225 81.3787L163.335 82.3108L163.338 82.321L167.225 81.3787ZM167.152 81.0752L171.042 80.1432L170.111 76.255L166.222 77.1849L167.152 81.0752ZM167.151 81.0755L163.267 82.0331L164.218 85.8897L168.081 84.9659L167.151 81.0755ZM73.5821 24.1081L72.6501 20.2182L73.5821 24.1081ZM15.9883 117.293L16.9223 121.182L20.7842 120.255L19.8842 116.386L15.9883 117.293ZM15.9863 117.293L15.0523 113.404L11.1649 114.337L12.0964 118.225L15.9863 117.293ZM32.9776 188.211L29.0877 189.143L30.0201 193.035L33.9113 192.101L32.9776 188.211ZM32.9916 188.208L36.8636 187.204L35.8779 183.401L32.058 184.318L32.9916 188.208ZM126.329 244.261L125.397 240.371H125.397L126.329 244.261ZM184.131 151.996L183.2 148.106L179.381 149.021L180.225 152.856L184.131 151.996ZM184.144 151.993L185.075 155.883L188.966 154.951L188.034 151.061L184.144 151.993ZM187.78 150.002C187.751 149.881 187.722 149.759 187.693 149.637L179.914 151.502C179.94 151.611 179.966 151.721 179.992 151.831L187.78 150.002ZM187.693 149.637C187.664 149.516 187.635 149.395 187.605 149.273L179.834 151.172C179.861 151.281 179.887 151.391 179.914 151.502L187.693 149.637ZM163.433 82.7175L179.83 151.154L187.609 149.29L171.212 80.8535L163.433 82.7175ZM171.215 80.8634C171.198 80.7928 171.181 80.7216 171.164 80.65L163.384 82.5142C163.4 82.5781 163.415 82.6425 163.43 82.7076L171.215 80.8634ZM171.164 80.65C171.147 80.579 171.13 80.5078 171.113 80.4364L163.338 82.321C163.353 82.3851 163.369 82.4494 163.384 82.5141L171.164 80.65ZM163.262 82.0072L163.335 82.3108L171.115 80.4467L171.042 80.1432L163.262 82.0072ZM168.081 84.9659L168.083 84.9655L166.222 77.1849L166.221 77.1852L168.081 84.9659ZM171.035 80.118C160.291 36.5398 116.364 9.74466 72.6501 20.2182L74.514 27.998C113.949 18.5498 153.575 42.7219 163.267 82.0331L171.035 80.118ZM72.6501 20.2182C28.936 30.6917 1.92157 74.4836 12.0923 118.199L19.8842 116.386C10.7094 76.9513 35.0796 37.4461 74.514 27.998L72.6501 20.2182ZM16.9204 121.183L16.9223 121.182L15.0542 113.403L15.0523 113.404L16.9204 121.183ZM36.8676 187.279L19.8763 116.361L12.0964 118.225L29.0877 189.143L36.8676 187.279ZM32.058 184.318L32.044 184.322L33.9113 192.101L33.9252 192.097L32.058 184.318ZM29.1195 189.211C40.2685 232.223 83.8693 258.548 127.261 248.151L125.397 240.371C86.2539 249.75 46.9204 226.002 36.8636 187.204L29.1195 189.211ZM127.261 248.151C170.653 237.755 197.591 194.53 188.038 151.136L180.225 152.856C188.842 191.999 164.541 230.993 125.397 240.371L127.261 248.151ZM183.212 148.103L183.2 148.106L185.063 155.886L185.075 155.883L183.212 148.103ZM179.996 151.849L180.254 152.925L188.034 151.061L187.776 149.985L179.996 151.849Z"
              fill="black"
              mask="url(#path-4-inside-1)"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="200" height="320" fill="white"></rect>
            </clipPath>
          </defs>
        </g>

        <g id="vue-color-avatar-eyes">
          <g transform="translate(62, 97)">
            <title>eyes - round</title>
            <ellipse
              cx="16.1171"
              cy="28.9268"
              rx="9"
              ry="10"
              transform="rotate(-6.77646 16.1171 28.9268)"
              fill="black"
            ></ellipse>
            <ellipse
              cx="80.1486"
              cy="18.9231"
              rx="9"
              ry="10"
              transform="rotate(-6.27568 80.1486 18.9231)"
              fill="black"
            ></ellipse>
          </g>
        </g>

        <g id="vue-color-avatar-nose">
          <g transform="translate(99, 128)">
            <title>nose - pointed</title>
            <path
              d="M16.5 3C16.5 17 23.5 28 23.5 28C23.5 28 20 34 10 32"
              stroke="#171921"
              strokeWidth="4"
            ></path>
          </g>
        </g>

        <g id="vue-color-avatar-eyebrows">
          <g transform="translate(33, 78)">
            <title>eyebrows - up</title>
            <path
              d="M99 10.2143C104.667 7.5476 118 5.11427 126 16.7143"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            ></path>
            <path
              d="M23.5791 35.521C25.6497 29.6104 33.2612 18.3959 47.1418 20.8224"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            ></path>
          </g>
        </g>

        <g id="vue-color-avatar-tops">
          <g transform="translate(-34, -19)">
            <title>tops - fonze</title>
            <path
              d="M210.177 51.3965C201.855 91.2936 103.499 96.8962 83.6772 96.8962C31.6548 102.823 56.6248 165.262 66.1772 196.396C58.6772 197.396 59.6772 206.396 30.6772 134.896C7.47724 77.6964 73.1831 42.8337 121.999 30.9995C170.815 19.1653 189.499 2.50195 189.499 2.50195C210.177 11 215.116 27.7185 210.177 51.3965Z"
              fill="#583c3c"
              stroke="black"
            ></path>
            <path
              d="M205.134 124.947L189.316 71.5069L199.354 62.3644C210.109 99.4523 210.601 120.988 205.134 124.947Z"
              fill="#583c3c"
              stroke="black"
            ></path>
            <path
              d="M80 170C74.4 142.8 60.3333 147.667 51 149L41 105L81.5844 96.5056C82.3363 96.2656 83.1408 96.0955 84 96L81.5844 96.5056C63.4332 102.299 75.9565 148.796 91 168L80 170Z"
              fill="#583c3c"
            ></path>
            {/* <path
              d="M24.9887 67.3632C33.8341 62.9091 44.2805 65.4873 48.3981 67.3331L36.6273 82.2134C39.6625 77.3568 30.1329 70.2897 24.9887 67.3632Z"
              fill="#583c3c"
            ></path>
            <path
              d="M10 84.4996C21.6 77.6996 32.8333 79.9996 37 81.9996L32.5 97.5C31.3 89.1 17 85.3331 10 84.4996Z"
              fill="#583c3c"
              // stroke="black"
            ></path> */}
          </g>
        </g>

        <g id="vue-color-avatar-glasses"></g>

        <g id="vue-color-avatar-beard"></g>

        <g id="vue-color-avatar-mouth">
          <g transform="translate(87, 163)">
            <title>mouth - smile</title>
            <path
              d="M2.5 17.5C5 34.5 33.5 42.5 59.5 23"
              stroke="black"
              strokeWidth="4"
            ></path>
          </g>
        </g>

        <g id="vue-color-avatar-ear">
          <g transform="translate(5, 130.5)">
            <title>ear - attached</title>
            <path
              d="M30.5 6.17556C28.17 5.40834 25.6547 5 23.08 5C12.5866 5 4.08007 11.5 5.08001 23.5C6.12162 36 13.5866 40.5 24.08 40.5C25.2476 40.5 26.3906 40.3975 27.5 40.2011C28.7105 39.9869 29.8811 39.6609 31 39.2347"
              stroke="#000"
              strokeWidth="8"
            ></path>
            <path
              d="M31.5 39.0361C29.2204 39.9786 26.7127 40.5 24.08 40.5C13.5866 40.5 6.12162 36 5.08001 23.5C4.08007 11.5 12.5866 5 23.08 5C26.2175 5 29.2667 5.60635 32 6.72957L31.5 39.0361Z"
              fill="#ffcebc"
            ></path>
            <path
              d="M27.5 13.5004C23.5 11.6671 14.7 10.7004 11.5 21.5004"
              stroke="#000"
              strokeWidth="4"
            ></path>
            <path
              d="M17 14C19.1667 15.8333 23.3 21.5 22.5 29.5"
              stroke="#000"
              strokeWidth="4"
            ></path>
          </g>
        </g>

        <g id="vue-color-avatar-earrings"></g>

        <g id="vue-color-avatar-clothes">
          <g transform="translate(-43.5, 247)">
            <title>clothes - collared</title>
            <path
              d="M142.771 67.5777C142.771 67.5779 142.771 67.5779 144 66L142.771 67.5779L144.493 68.9188L145.679 67.0874L145.679 67.087L145.681 67.0841L145.69 67.0697L145.731 67.0072C145.742 66.9904 145.755 66.971 145.769 66.9491C145.803 66.8975 145.847 66.8318 145.9 66.7529C146.05 66.5278 146.275 66.1947 146.57 65.7695C147.158 64.919 148.023 63.7016 149.118 62.2463C151.312 59.3316 154.416 55.482 158.071 51.7183C161.737 47.9446 165.898 44.3176 170.198 41.7935C174.514 39.2597 178.777 37.9491 182.733 38.4825C225.171 44.2046 256.402 63.002 276.674 91.0006H3.37453C19.6742 61.6588 42.8579 42.9825 80.4446 34.4127C82.0464 34.0474 84.2242 34.1581 86.9471 34.7915C89.6421 35.4183 92.7146 36.5194 96.0282 37.9759C102.655 40.8887 110.052 45.1363 117.004 49.5364C123.945 53.9299 130.39 58.4425 135.104 61.8597C137.459 63.5674 139.379 64.9995 140.709 66.0036C141.374 66.5056 141.891 66.9005 142.241 67.1693C142.416 67.3037 142.55 67.4065 142.639 67.4754L142.739 67.553L142.764 67.5722L142.77 67.5767L142.771 67.5777Z"
              fill="#323232"
              stroke="black"
              strokeWidth="4"
            ></path>
            <path
              d="M68.6127 37.0849L73.7794 17.8529C73.9886 17.0741 74.9962 16.854 75.5402 17.4493C90.4034 33.7135 109.16 33.0762 115.385 32.3297C116.23 32.2284 116.892 33.1531 116.495 33.906L103.338 58.859C103.136 59.2414 102.724 59.4518 102.3 59.3636C98.3518 58.5411 78.6774 53.7321 68.7286 37.8667C68.583 37.6345 68.5416 37.3496 68.6127 37.0849Z"
              fill="#E0DDFF"
              stroke="black"
              strokeWidth="4"
            ></path>
            <path
              d="M199.195 36.9814L187.615 17.4989C187.222 16.8374 186.253 16.8483 185.834 17.4937C180.097 26.3296 170.202 30.4 166.742 31.6024C166.12 31.8187 165.835 32.5584 166.171 33.1254L179.673 55.9402C179.875 56.2806 180.255 56.4651 180.636 56.3568C182.771 55.749 190.096 52.6851 199.182 38.0212C199.378 37.706 199.385 37.3001 199.195 36.9814Z"
              fill="#E0DDFF"
              stroke="black"
              strokeWidth="4"
            ></path>
            <path
              d="M125.5 54.5L116.5 33L109.5 48L125.5 54.5Z"
              fill="black"
              stroke="black"
              strokeWidth="4"
              strokeLinejoin="round"
            ></path>
            <path
              d="M157 53.5L166 32L173 47L157 53.5Z"
              fill="black"
              stroke="black"
              strokeWidth="4"
              strokeLinejoin="round"
            ></path>
            <path
              d="M86.5 14L74.5 17L84.5 23.5L86.5 14Z"
              fill="black"
              stroke="black"
              strokeWidth="4"
              strokeLinejoin="round"
            ></path>
            <path
              d="M176 14L187 17L180 23.5L176 14Z"
              fill="black"
              stroke="black"
              strokeWidth="4"
              strokeLinejoin="round"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};