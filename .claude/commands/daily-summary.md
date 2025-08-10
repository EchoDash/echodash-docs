# Daily Development Summary Generator

<command name="daily-summary">
<description>
Generate a comprehensive daily development summary across EchoDash repositories, optimized for team sharing in Slack.
Input: $ARGUMENTS (optional: date in YYYY-MM-DD format, defaults to today)
</description>

<workflow>
  <phase name="data_collection">
    <step id="1" name="determine_date">
      <condition>Check if $ARGUMENTS contains a date</condition>
      <if_empty>Use today's date from `date +%Y-%m-%d`</if_empty>
      <if_provided>Use provided date format</if_provided>
    </step>

    <step id="2" name="collect_git_activity">
      <repositories>
        <mvp>cd /Users/jgarturo/Projects/EchoDash/echodash-mvp</mvp>
        <docs>cd /Users/jgarturo/Projects/EchoDash/echodash-docs</docs>
        <plugin>cd /Users/jgarturo/Local Sites/dev/app/public/wp-content/plugins/echodash</plugin>
      </repositories>
      <commands>
        <commits>git log --since="$DATE" --oneline --all</commits>
        <recent_commits>git log --oneline -10</recent_commits>
        <status>git status --porcelain</status>
        <current_branch>git branch --show-current</current_branch>
      </commands>
    </step>

    <step id="3" name="collect_github_activity">
      <queries>
        <merged_prs>gh pr list --state merged --search "merged:$DATE" --json number,title,mergedAt,author</merged_prs>
        <closed_issues>gh issue list --state closed --search "closed:$DATE" --json number,title,closedAt,author</closed_issues>
        <recent_prs>gh pr list --limit 5 --json number,title,state,author</recent_prs>
      </queries>
    </step>

    <step id="4" name="check_dependabot_activity">
      <search>Recent Dependabot merges in git logs</search>
      <pattern>git log --since="$DATE" --grep="dependabot" --grep="bump" -i --oneline</pattern>
    </step>
  </phase>

  <phase name="analysis">
    <step id="5" name="categorize_work">
      <categories>
        <features>New functionality, enhancements</features>
        <bugs>Bug fixes, issue resolutions</bugs>
        <docs>Documentation updates, guides</docs>
        <deps>Dependency updates, security patches</deps>
        <infra>CI/CD, tooling, workflows</infra>
        <wip>Work in progress, uncommitted changes</wip>
      </categories>
    </step>

    <step id="6" name="identify_key_achievements">
      <metrics>
        <issues_closed>Count of GitHub issues closed</issues_closed>
        <prs_merged>Count of pull requests merged</prs_merged>
        <commits_made>Count of commits across repos</commits_made>
        <files_changed>Significant file modifications</files_changed>
      </metrics>
    </step>

    <step id="7" name="assess_impact">
      <impact_areas>
        <user_experience>UI/UX improvements</user_experience>
        <developer_experience>DX improvements, tooling</developer_experience>
        <performance>Performance optimizations</performance>
        <security>Security updates, vulnerability fixes</security>
        <maintenance>Code quality, refactoring</maintenance>
      </impact_areas>
    </step>
  </phase>

  <phase name="formatting">
    <step id="8" name="generate_slack_summary">
      <format>
        <header>
          <date_header># EchoDash Daily Summary - $DATE</date_header>
          <emoji_status>🚀 for major features, 🔧 for maintenance, 🐛 for fixes</emoji_status>
        </header>
        
        <major_section>
          <title>## 🎯 Key Accomplishments</title>
          <format_achievements>
            <per_repo>### **Repository Name**</per_repo>
            <per_issue>**✅ Issue #X**: Brief description</per_issue>
            <details>- Key changes/impact bullets</details>
          </format_achievements>
        </major_section>

        <metrics_section>
          <title>## 📊 Today's Metrics</title>
          <format_metrics>
            <line>- **X Issues Completed** (#list)</line>
            <line>- **X PRs Merged** (#list)</line>
            <line>- **X Dependencies Updated**</line>
            <line>- **X Commits** across both repos</line>
          </format_metrics>
        </metrics_section>

        <work_in_progress>
          <title>## 🔄 Active Development</title>
          <current_branches>List current feature branches with descriptions</current_branches>
          <uncommitted_work>Highlight significant uncommitted changes</uncommitted_work>
        </work_in_progress>

        <next_steps>
          <title>## 🎯 Next Up</title>
          <priorities>List immediate next priorities</priorities>
          <blockers>Any blockers or dependencies</blockers>
        </next_steps>

        <footer>
          <repo_status>**Repo Status**: Clean/WIP indicators</repo_status>
          <links>Links to relevant PRs/issues</links>
        </footer>
      </format>
    </step>

    <step id="9" name="optimize_for_slack">
      <formatting_rules>
        <line_length>Keep lines under 80 chars where possible</line_length>
        <bullet_format>Use - for bullets, ** for bold</bullet_format>
        <links>Format as [PR #123](url) for GitHub links</links>
        <code_blocks>Use `backticks` for code/filenames</code_blocks>
        <emphasis>Use **bold** for impact items, *italic* for notes</emphasis>
        <emojis>Strategic emoji use for visual scanning</emojis>
      </formatting_rules>
    </step>

    <step id="10" name="add_context_links">
      <include>
        <pr_links>Direct links to merged PRs</pr_links>
        <issue_links>Links to closed issues</issue_links>
        <commit_links>Links to significant commits</commit_links>
        <branch_links>Links to active branches</branch_links>
      </include>
    </step>
  </phase>

  <phase name="output">
    <step id="11" name="present_summary">
      <output_format>
        <copyable>Formatted for easy copy/paste into Slack</copyable>
        <scannable>Clear hierarchy and visual breaks</scannable>
        <actionable>Include next steps and follow-ups</actionable>
      </output_format>
    </step>

    <step id="12" name="save_reference">
      <optional>
        <save_to_file>Save summary to daily-summaries/ directory</save_to_file>
        <filename>YYYY-MM-DD-daily-summary.md</filename>
      </optional>
    </step>
  </phase>
</workflow>

<output_template>
# EchoDash Daily Summary - {DATE}

## 🎯 Key Accomplishments

### **EchoDash Documentation**
**✅ Issue #{number}**: {brief_description}
- {key_change_1}
- {key_change_2}
- **Impact**: {business_impact}

### **EchoDash MVP**
**🔄 Active**: Issue #{number} - {description}
- {progress_update}
- {files_modified}

## 📊 Today's Metrics
- **{X} Issues Completed** (#{list})
- **{X} PRs Merged** (#{list})
- **{X} Dependencies Updated**
- **{X} Commits** across both repos

## 🔧 Infrastructure & Maintenance
- {dependency_updates}
- {ci_cd_improvements}
- {code_quality_improvements}

## 🔄 Active Development
- **MVP**: `{current_branch}` - {description}
- **Docs**: `{current_branch}` - {description}

## 🎯 Next Up
1. {priority_1}
2. {priority_2}
3. {priority_3}

**Repo Status**: {clean_or_wip_status}
</output_template>

<slack_formatting_tips>
- Use **bold** for key items and numbers
- Use `backticks` for branch names, file names, and code
- Use emojis strategically for visual hierarchy
- Keep bullet points concise and scannable
- Include relevant GitHub links as [PR #123](url)
- Break up text with blank lines for readability
- Use ### for subsections to create visual hierarchy
</slack_formatting_tips>

<example_usage>
@daily-summary
@daily-summary 2025-07-29
</example_usage>
</command> 