/* eslint max-len: ["error", { "code": 1000 }] */
// Click on Alt-Z or View/Toggle.. to toggle word wrap
// Until 1000 seems fine,
// Do not exceed 1000 length for each message as a rule for the whole project!
// Should not serialize or persist as JSON.

const fontFamilies = [
  'Open Sans',
  'Roboto',
  'Noto Sans JP',
  'Lato',
  'Montserrat',
  'Roboto Condensed',
  'Source Sans Pro',
  'Oswald',
  'Poppins',
  'Roboto Mono',
  'Raleway',
  'Noto Sans',
  'PT Sans',
  'Ubuntu',
  'Merriweather',
  'Roboto Slab',
  'Quicksand',
  'Playfair Display',
  'Nunito',
  'Noto Sans KR',
  'Noto Sans TC',
  'Rubik',
  'Mukta',
  'Lora',
  'Sigmar One',
  'Limelight',
  'Work Sans',
  'Nunito Sans',
  'PT Serif',
  'Fira Sans'
]
// TODO: reference to context: change texts of admin emails
const messages = {
  approve:
    {
      ar: '',
      en: (pass, id) => `<a href="https://dzlistings.com/listings/check/${pass}/${id}">check</a><br><br><hr><a href="https://dzlistings.com/listings/approve/${pass}/${id}">approve</a> `,
      fr: ''
    },
  notify:
    {
      ar: '',
      en: (pass, id) => `<a href="https://dzlistings.com/listings/reactivate/${pass}/${id}">This listing</a> has been published one month ago and is now deactivated. If you want to keep it online please reactivate it entering the passphrase.<br><br><hr>`,
      fr: ''
    }
}

const illustrations = [
  'making_art_759c',
  'quitting_time_dm8t',
  'user_flow_vr6w',
  'printing_invoices_5r4r',
  'schedule_pnbk',
  'in_progress_ql66',
  'messaging_fun_86y2',
  'mobile_testing_reah',
  'barber_3uel',
  'version_control_9bpv',
  'status_update_jjgk',
  'jason_mask_t07o',
  'social_dashboard_k3pt',
  'robotics_kep0',
  'scrum_board_cesn',
  'usability_testing_2xs4',
  'wind_turbine_x2k4',
  'developer_activity_bv83',
  'medicine_b1ol',
  'revenue_3osh',
  'scooter_aia8',
  'wallet_aym5',
  'witch_7uk7',
  'wedding_t1yl',
  'warning_cyit',
  'personal_trainer_ote3',
  'winners_2yls',
  'group_chat_v059',
  'night_calls_5jh7',
  'mobile_marketing_iqbr',
  'winter_designer_a2m7',
  'maker_launch_crhe',
  'data_trends_b0wg',
  'features_overview_jg7a',
  'interview_rmcf',
  'content_vbqo',
  'questions_75e0',
  'balloons_vxx5',
  'doctors_hwty',
  'savings_hjfl',
  'children_4rtb',
  'security_o890',
  'super_thank_you_obwk',
  'voice_control_ofo1',
  'missed_chances_k3cq',
  'world_9iqb',
  'setup_analytics_8qkl',
  'videographer_nnc7',
  'setup_wizard_r6mr',
  'heartbroken_cble',
  'interaction_design_odgc',
  'startled_8p0r',
  'site_stats_l57q',
  'add_to_cart_vkjp',
  'confirmation_2uy0',
  'fatherhood_7i19',
  'dashboard_nklg',
  'feeling_blue_4b7q',
  'order_confirmed_1m3v',
  'business_plan_5i9d',
  'before_dawn_bqrj',
  'businesswoman_pc12',
  'getting_coffee_wntr',
  'pedestrian_crossing_l6jv',
  'powerful_26ry',
  'programming_2svr',
  'working_late_pukg',
  'envelope_n8lc',
  'press_play_bx2d',
  'emails_6uqr',
  'dark_alley_hl3o',
  'chef_lbjx',
  'off_road_9oae',
  'QA_engineers_dg5p',
  'pie_chart_6efe',
  'baby_ja7a',
  'mobile_payments_edgf',
  'design_community_rcft',
  'preferences_uuo2',
  'businessman_97x4',
  'trip_dv9f',
  'on_the_office_fbfs',
  'wireframing_nxyi',
  'product_teardown_elol',
  'alien_science_nonm',
  'hang_out_h9ud',
  'science_fqhl',
  'conversation_h12g',
  'business_deal_cpi9',
  'focus_sey6',
  'designer_life_w96d',
  'server_status_5pbv',
  'studying_s3l7',
  'blank_canvas_3rbb',
  'smiley_face_lmgm',
  'back_to_school_inwc',
  'product_tour_foyt',
  'upload_87y9',
  'fall_is_coming_dg3x',
  'target_kriv',
  'to_do_list_a49b',
  'city_driver_jh2h',
  'motherhood_7htu',
  'digital_nomad_9kgl',
  'creativity_wqmm',
  'online_shopping_ga73',
  'more_music_w70e',
  'instant_support_elxh',
  'book_lover_mkck',
  'startup_life_2du2',
  'design_tools_42tf',
  'mobile_browsers_lib5',
  'work_chat_erdt',
  'doctor_kw5l',
  'team_spirit_hrr4',
  'work_time_lhoj',
  'empty_xct9',
  'weather_d9t2',
  'word_of_mouth_v1j9',
  'on_the_way_ldaq',
  'birthday_cake_7df8',
  'a_day_at_the_park_owg1',
  'Calculator_0evy',
  'group_selfie_ijc6',
  'personalization_triu',
  'relaxing_at_home_9tyc',
  'pilates_gpdb',
  'loading_frh4',
  'running_wild_ni0y',
  'taking_notes_tjaf',
  'collection_u2np',
  'thoughts_e49y',
  'refreshing_ncum',
  'moment_to_remember_02gj',
  'analysis_4jis',
  'workout_gcgu',
  'airport_2581',
  'photocopy_gj0t',
  'campfire_s6y4',
  'High_five_u364',
  'young_and_happy_hfpe',
  'report_mx0a',
  'music_r1se',
  'navigation_lytx',
  'surfer_m6jb',
  'exploring_1l7f',
  'onboarding_o8mv',
  'art_lover_yjfr',
  'in_the_pool_c5h0',
  'successful_purchase_uyin',
  'organize_resume_utk5',
  'android_jr64',
  'ethereum_desire_wy1b',
  'reading_list_4boi',
  'gardening_j8jx',
  'online_world_mc1t',
  'messaging_uok8',
  'online_1qud',
  'forgot_password_gi2d',
  'lost_bqr2',
  'beach_56sf',
  'credit_card_payment_12va',
  'time_management_30iu',
  'inbox_cleanup_w2ur',
  'crypto_flowers_6bgv',
  'community_8nwl',
  'wall_post_83ul',
  'app_installation_mbdv',
  'vr_chat_kq3p',
  'forever_5ag7',
  'track_and_field_33qn',
  'fishing_hoxa',
  'be_the_hero_ssr2',
  'accept_terms_4in8',
  'gdpr_3xfb',
  'in_sync_xwsa',
  'basketball_agx4',
  'social_ideas_e8rj',
  'marilyn_v73y',
  'staying_in_i80u',
  'organize_photos_d5nr',
  'podcast_q6p7',
  'people_search_wctu',
  'girl_just_wanna_have_fun_9d5u',
  'messenger_e7iu',
  'social_networking_nqk4',
  'Ride_a_bicycle_2yok',
  'friendship_mni7',
  'makeup_artist_rxn8',
  'electric_car_b7hl',
  'freelancer_b0my',
  'gaming_6oy3',
  'rising_8svm',
  'events_2p66',
  'Follow_me_drone_kn76',
  'Bibliophile_hwqc',
  'old_day_6x25',
  'co-working_825n',
  'segmentation_uioo',
  'may_the_force_bgdm',
  'back_in_the_day_knsh',
  'goal_0v5v',
  'firmware_mf69',
  'country_side_ayop',
  'blogging_vpvv',
  'sunny_day_bk3m',
  'sleep_analysis_o5f9',
  'wishes_icyp',
  'data_report_bi6l',
  'healthy_habit_bh5w',
  'static_assets_rpm6',
  'in_love_3dcq',
  'good_doggy_4wfq',
  'virtual_reality_y5ig',
  'by_my_car_ttge',
  'filing_system_b5d2',
  'celebration_0jvk',
  'drone_race_0sim',
  'artificial_intelligence_upfn',
  'mindfulness_scgo',
  'make_it_rain_iwk4',
  'building_blocks_n0nc',
  'coding_6mjf',
  'selfie_time_cws4',
  'web_devices_ad58',
  'eating_together_tjhx',
  'drone_delivery_5vrm',
  'street_food_hm5i',
  'window_shopping_b96y',
  'in_the_office_o44c',
  'tasting_de22',
  'romantic_getaway_k2mf',
  'image_upload_wqh3',
  'newsletter_vovu',
  'easter_egg_hunt_r36d',
  'finance_0bdk',
  'through_the_desert_fcin',
  'grand_slam_0q5r',
  'walk_in_the_city_1ma6',
  'ethereum_fb7n',
  'website_setup_5hr2',
  'co-workers_ujs6',
  'departing_lsgy',
  'mobile_apps_4wgf',
  'influencer_d3xx',
  'outer_space_3v6n',
  'btc_p2p_lth5',
  'social_strategy_1wuq',
  'together_j0gj',
  'modern_woman_9l0u',
  'meeting_115p',
  'ordinary_day_xi0c',
  'home_run_oerh',
  'cloud_hosting_aodd',
  'broadcast_jhwx',
  'tweetstorm_49e8',
  'happy_birthday_s72n',
  'JavaScript_Frameworks_x21l',
  'women_day_2m89',
  'spreadsheets_xdjy',
  'email_capture_x8kv',
  'fast_loading_0lbh',
  'login_jdch',
  'hello_aeia',
  'collecting_fjjl',
  'organizing_projects1_47ja',
  'live_collaboration_2r4y',
  'product_hunt_n3f5',
  'connecting_teams3_1pgn',
  'new_message_2gfk',
  'Lighthouse_frb8',
  'houses3_xwf7',
  'about_us_page_ee1k',
  'bitcoin2_ave7',
  'fans_gr54',
  'Winter_olympics_p07j',
  'To_the_stars_qhyy',
  'responsive_6c8s',
  'creation_process_vndn',
  'designer_kcp7',
  'profile_pic_ic5t',
  'team_ih79',
  'notes1_cf55',
  'selfie1_kpqf',
  'news_go0e',
  'development_ouy3',
  'messages1_9ah2',
  'credit_card_payment_yb88',
  'love_is_in_the_air_4mmc',
  'superhero_kguv',
  'active_support_6rwo',
  'design_process_iqqg',
  'control_panel1_20gm',
  'transfer_files_6tns',
  'hiring_cyhs',
  'brainstorming_49d4',
  'startman1_h7l9',
  'post2_19cj',
  'graduation_9x4i',
  'no_data_qbuo',
  'cloud_sync_2aph',
  'grades_j6jn',
  'gift1_sgf8',
  'add_file2_gvbb',
  'connected_8wvi',
  'secure_data_0rwp',
  'agreement_aajr',
  'taken_yju1',
  'confirmed_81ex',
  'security_on_6e8f',
  'air_support_wy1q',
  'beer_celebration_3wc8',
  'chatting_2yvo',
  'upvote_96dp',
  'secure_server_s9u8',
  'queue_qt30',
  'choose_80qg',
  'chilling_8tii',
  'swipe_profiles1_i6mr',
  'real-time_sync_o57k',
  'add_user_ipe3',
  'customer_survey_f9ur',
  'mission_impossible_bwa2',
  'filter_4kje',
  'Cautious_dog_q83f',
  'Container_ship_urt4',
  'playful_cat_ql3n',
  'specs2_2jb3',
  'job_hunt_byf9',
  'file_searching_duff',
  'Jogging_t14q',
  'collaboration2_8og0',
  'working2_ce2b',
  'experts3_3njd',
  'windows_q9m0',
  'destanation1_h3vq',
  'Meditation_o89g',
  'opened_gi4n',
  'growing_rk7d',
  'invite_i6u7',
  'pen_nqf7',
  'checklist_7q37',
  'floating_61u6',
  'address_udes',
  'vault_9cmw',
  'typing_jie3',
  'mail_box_kd5i',
  'house_searching_n8mp',
  'sync4_xlc6',
  'notebook_g9x9',
  'alert_mc7b',
  'movie_night_93wl',
  'welcome_3gvl',
  'maintenance_cn7j',
  'setup_obqo',
  'select_13cv',
  'presentation1_tqkp',
  'photo_sharing_1_85vy',
  'mail_2_tqip',
  'camping_j8s0',
  'safe_bnk7',
  'account_490v',
  'processing_qj6a',
  'for_sale_viax',
  'data_xmfy',
  'Golden_Gate_Bridge_00us',
  'calendar_dutt',
  'social_growth_d0y3',
  'search_engines_nn9e',
  'server_q2pb',
  'bus_stop_h370',
  'relaxation_1_wbr7',
  'segment_uwu1',
  'contrast_vb82',
  'browser_stats_704t',
  'appreciation_2_v4bt',
  'couple_a7s9',
  'create_f05x',
  'morning_essentials_9fw8',
  'resume_folder_2_arse',
  'images_aef7',
  'Astronaut_0o7w',
  'depi_wexf',
  'Building_leu4',
  'statistics_ctoq',
  'passing_by_gqfk',
  'Internet_on_the_go_5xx0',
  'resume_1hqp',
  'snowman_1_a2ch',
  'autumn_2_ygk5',
  'social_tree_1_y9wa',
  'working_woman_3uve',
  'man_eiev',
  'woman_mevk',
  'map_light_6ttm',
  'photos_1nui',
  'Posts_rskc',
  'mobile_prle',
  'folder_x4ft',
  'tabs_jf82',
  'travel_pb6m',
  'plain_credit_card_c8b8',
  'portfolio_essv',
  'analytics_5pgy',
  'files1_9ool',
  'chat_1wo5',
  'mail1_uab6',
  'files_6b3d',
  'Devices_e67q',
  'charts_jj6t',
  'blog_anyj',
  'photo_4yb9',
  'map_dros',
  'search_2dfv',
  'mail_cg1t',
  'pcsocial_16rw',
  'credit_card_df1m'
]
module.exports.illustrations = illustrations
module.exports.fontFamilies = fontFamilies
module.exports.messages = messages