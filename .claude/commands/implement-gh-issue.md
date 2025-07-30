# Implement Frontend Feature with Full Testing

<command name="implement-gh-issue">
<description>
Implement frontend features for the Docusaurus site with comprehensive testing, git workflow, and PR preparation.
Input: $ARGUMENTS (GitHub issue ID, URL, or feature description)
</description>

<workflow>
  <phase name="setup">
    <step id="1" name="validate_input">
      <condition>Check if $ARGUMENTS is empty or whitespace</condition>
      <action type="stop_and_ask">
        <message>
What would you like me to implement? Please provide:
- A GitHub issue number (e.g., 123)  
- A GitHub issue URL (e.g., https://github.com/user/repo/issues/123)
- Or describe the feature/fix you want me to implement
        </message>
      </action>
    </step>

    <step id="2" name="get_issue_details">
      <conditions>
        <if_number>gh issue view $ARGUMENTS</if_number>
        <if_url>gh issue view &lt;extract-issue-number&gt;</if_url>
        <if_description>proceed with description directly</if_description>
      </conditions>
    </step>

    <step id="3" name="create_branch">
      <description>Create feature branch based on issue or description</description>
      <patterns>
        <github_issue>git checkout -b feature/issue-&lt;number&gt;-&lt;short-description&gt;</github_issue>
        <description>git checkout -b feature/&lt;kebab-case-description&gt;</description>
      </patterns>
      <example>git checkout -b feature/issue-123-add-dark-mode-toggle</example>
    </step>

    <step id="4" name="check_ui_requirements">
      <description>Look for mockups and design requirements</description>
      <image_check>
        <extract>gh issue view &lt;number&gt; | grep -oE 'https://[^"]+\.(png|jpg|jpeg|gif|webp)|https://github\.com/user-attachments/[^"]+'</extract>
        <if_found>
          <count>IMAGE_COUNT=$(gh issue view &lt;number&gt; | grep -oE 'https://[^"]+\.(png|jpg|jpeg|gif|webp)|https://github\.com/user-attachments/[^"]+' | wc -l | tr -d ' ')</count>
          <action type="stop_and_ask">
            <message>
I found $IMAGE_COUNT image attachment(s) in this issue that I cannot access directly.
Please provide for each numbered image either:
- The local file path after downloading
- The direct AWS URL from your browser
- A description of what the image shows

Example response: 'Image 1: /tmp/mockup.png, Image 2: Shows the loading skeleton'
            </message>
            <list_urls>gh issue view &lt;number&gt; | grep -oE 'https://[^"]+\.(png|jpg|jpeg|gif|webp)|https://github\.com/user-attachments/[^"]+' | awk '{print NR ". " $0}'</list_urls>
          </action>
        </if_found>
      </image_check>
    </step>
  </phase>

  <phase name="analysis">
    <step id="5" name="understand_requirements">
      <description>Parse and understand feature requirements from issue/description</description>
    </step>

    <step id="6" name="search_codebase">
      <description>Find existing related code</description>
      <commands>
        <search_by_name>find src/ docs/ blog/ -name "*.tsx" -o -name "*.ts" -o -name "*.md" | grep -i &lt;feature_name&gt;</search_by_name>
        <search_by_content>grep -r "keyword" src/ docs/ blog/ --include="*.tsx" --include="*.ts" --include="*.md"</search_by_content>
      </commands>
      <check_locations>
        <components>src/components/</components>
        <pages>src/pages/</pages>
        <docs>docs/</docs>
        <blog>blog/</blog>
      </check_locations>
    </step>

    <step id="7" name="analyze_architecture">
      <checks>
        <dependencies>Review package.json for existing libraries</dependencies>
        <config>Check docusaurus.config.js for plugins/configuration</config>
        <bundle_impact>Assess new dependency bundle size impact</bundle_impact>
        <tailwind>Verify compatibility with tw- prefixed Tailwind CSS</tailwind>
      </checks>
    </step>

    <step id="8" name="edge_case_analysis">
      <considerations>
        <accessibility>Screen readers, keyboard navigation, ARIA labels</accessibility>
        <performance>Bundle size, lazy loading, image optimization</performance>
        <responsive>Mobile-first, tablet/desktop breakpoints</responsive>
        <seo>Meta tags, structured data, sitemap impact</seo>
        <i18n>Text externalization, RTL support</i18n>
        <errors>Network failures, missing assets, malformed data</errors>
        <compatibility>Browser support requirements</compatibility>
        <content_mgmt>How non-technical users will update</content_mgmt>
        <analytics>User interaction tracking needs</analytics>
        <security>XSS prevention, content validation</security>
        <extensibility>Future evolution possibilities</extensibility>
      </considerations>
    </step>

    <step id="9" name="user_review" type="stop_and_wait">
      <description>Present comprehensive analysis for user approval</description>
      <present>
        <implementation_approach/>
        <file_changes/>
        <new_dependencies/>
        <edge_case_handling/>
        <enhancements/>
        <risks/>
        <performance_impact/>
        <alternatives/>
      </present>
      <ask>Does this approach look good? Any concerns or suggestions?</ask>
      <commit_after_approval>
        <command>git add -A</command>
        <message>
Initial analysis and planning for [feature/issue description]

- Analyzed requirements and dependencies
- Identified edge cases and enhancements
- Planned implementation approach
- User approved: [brief approval summary]
        </message>
      </commit_after_approval>
    </step>
  </phase>

  <phase name="implementation">
    <step id="10" name="implement_feature">
      <file_locations>
        <react_components>src/components/</react_components>
        <pages>src/pages/</pages>
        <documentation>docs/</documentation>
        <blog_posts>blog/</blog_posts>
        <styling>src/css/custom.css or component CSS modules</styling>
        <configuration>docusaurus.config.js, sidebars.js</configuration>
      </file_locations>
    </step>

    <step id="11" name="add_typescript_types">
      <if_new_component>
        <check_patterns>src/types/</check_patterns>
        <add_interfaces>Define proper TypeScript interfaces</add_interfaces>
        <type_props>Ensure all component props are typed</type_props>
      </if_new_component>
    </step>

    <step id="12" name="handle_static_assets">
      <images>
        <location>static/img/</location>
        <reference_markdown>/img/filename.png</reference_markdown>
        <reference_react>require('@site/static/img/filename.png')</reference_react>
      </images>
      <fonts>
        <location>static/fonts/</location>
        <update_preload>Update headTags in config if needed</update_preload>
      </fonts>
    </step>

    <step id="13" name="update_claude_md">
      <if_changes>
        <new_dependencies>Update "Tech Stack" section</new_dependencies>
        <new_commands>Add to "Common Development Commands"</new_commands>
        <new_patterns>Update "Project Structure"</new_patterns>
        <config_changes>Update "Key Configuration"</config_changes>
        <new_integrations>Update "Integration Points"</new_integrations>
        <workflow_changes>Update "Development Workflow"</workflow_changes>
      </if_changes>
    </step>

    <step id="14" name="implementation_commit">
      <command>git add -A</command>
      <message>
Implement [specific feature/component name]

- Added/modified [list key files]
- [Brief description of implementation]
- Updated TypeScript types and documentation
- Ready for testing phase
      </message>
    </step>
  </phase>

  <phase name="testing">
    <step id="15" name="dev_server_test">
      <command>npm run start -- --port 3001</command>
      <verify>Changes work as expected in development</verify>
    </step>

    <step id="16" name="playwright_visual_testing">
      <actions>
        <navigate>Browse to affected pages</navigate>
        <screenshot>Capture new/modified components</screenshot>
        <responsive>Test at different viewport sizes</responsive>
        <interactions>Test clicks, hovers, form submissions</interactions>
        <mockup_compare>Compare against provided designs if any</mockup_compare>
      </actions>
    </step>

    <step id="17" name="lint_and_typecheck">
      <command>npm run lint</command>
      <fix>
        <eslint_errors>TypeScript, React Hooks, Docusaurus rules</eslint_errors>
        <type_errors>Resolve TypeScript type issues</type_errors>
        <accessibility>Address a11y warnings</accessibility>
      </fix>
    </step>

    <step id="18" name="build_validation">
      <command>npm run build</command>
      <verify>
        <no_errors>Clean build without errors</no_errors>
        <no_broken_links>All links resolve correctly</no_broken_links>
        <assets_included>All assets properly bundled</assets_included>
        <dead_code_elimination>Tree shaking works properly</dead_code_elimination>
      </verify>
    </step>

    <step id="19" name="production_test">
      <command>npm run serve</command>
      <verify>
        <functionality>Features work in production build</functionality>
        <assets_load>All assets load correctly</assets_load>
        <routing>Client-side navigation works</routing>
      </verify>
    </step>

         <step id="20" name="content_specific_tests">
      <for_docs>
        <sidebar>Navigation updates correctly</sidebar>
        <frontmatter>Properly formatted metadata</frontmatter>
        <links>Internal references work</links>
        <search>Content is searchable</search>
      </for_docs>
      <for_blog>
        <authors_tags>Properly configured in yml files</authors_tags>
        <rss>Feed generates correctly</rss>
        <pagination>Blog list paginated properly</pagination>
        <social_meta>OG tags present and correct</social_meta>
      </for_blog>
      <for_components>
        <isolation>Component works standalone</isolation>
        <error_boundaries>Proper error handling</error_boundaries>
        <a11y>Screen reader compatible</a11y>
        <keyboard_nav>Full keyboard support</keyboard_nav>
      </for_components>
    </step>

         <step id="21" name="testing_commit">
       <command>git add -A</command>
       <message>
Complete testing and validation

- All tests passing (lint, build, serve)
- Visual testing completed with Playwright
- Performance and accessibility validated
- [Any test-specific notes or fixes]
       </message>
     </step>
  </phase>

     <phase name="completion">
     <step id="22" name="performance_verification">
       <checks>
         <bundle_size>npm run build and review output</bundle_size>
         <lighthouse>Run lighthouse audit on affected pages</lighthouse>
         <no_regressions>Ensure performance hasn't degraded</no_regressions>
       </checks>
     </step>

     <step id="23" name="documentation_updates">
       <updates>
         <readme>Add new dependencies or commands if any</readme>
         <env_vars>Document new environment variables</env_vars>
         <component_docs>Add usage documentation for new components</component_docs>
         <claude_md>Finalize CLAUDE.md updates from step 13</claude_md>
       </updates>
     </step>

     <step id="24" name="final_commit">
       <command>git add -A</command>
       <message>
Final documentation and cleanup

- Updated README.md and CLAUDE.md as needed
- Added component documentation
- Performance verified and optimized
- Ready for review
       </message>
     </step>

     <step id="25" name="pr_preparation" type="stop_and_wait">
       <generate_pr_details>
         <title>
           <for_issues>Fix #123: Add dark mode toggle to settings</for_issues>
           <for_features>Feature: Add responsive navigation component</for_features>
         </title>
         <description>
           <summary>Changes made</summary>
           <files>Files modified/added</files>
           <testing>Testing completed</testing>
           <screenshots>UI changes if any</screenshots>
           <breaking_changes>If applicable</breaking_changes>
           <issue_refs>Related issues</issue_refs>
         </description>
       </generate_pr_details>
       <present_to_user>
         <show>Proposed PR title and description</show>
         <list>All commits made during implementation</list>
         <summarize>Changes and impact</summarize>
       </present_to_user>
       <ask>Ready to create this PR? Any changes to title/description?</ask>
     </step>

     <step id="26" name="create_pr">
       <only_after_approval>
         <push>git push origin feature/[branch-name]</push>
         <create>gh pr create --title "[approved-title]" --body "[approved-description]"</create>
       </only_after_approval>
     </step>
   </phase>
</workflow>

<summary>
  <git_workflow>
    <branch_naming>feature/issue-&lt;number&gt;-&lt;description&gt; or feature/&lt;description&gt;</branch_naming>
         <commit_points>
       <planning>After user approval (step 9)</planning>
       <implementation>After code complete (step 14)</implementation>
       <testing>After tests pass (step 21)</testing>
       <documentation>After final cleanup (step 24)</documentation>
       <pr_creation>Only after user approval (step 26)</pr_creation>
     </commit_points>
  </git_workflow>
  <key_features>All functionality preserved with improved structure for reliable execution</key_features>
</summary>
</command> 