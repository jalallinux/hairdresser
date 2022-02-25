module.exports = {
    apps: [
        {
            namespace: "LARAVEL",
            name: "scheduler-work",
            interpreter: "php",
            script: "artisan",
            exec_mode: "fork",
            instances: 1,
            autorestart: true,
            cron_restart: "* * * * *",
            max_memory_restart: "100M",
            watch: true,
            ignore_watch: ["node_modules", "vendor"],
            args: [
                "schedule:work",
            ],
        },
        {
            namespace: "LARAVEL",
            name: "queues-on-database",
            interpreter: "php",
            script: "artisan",
            exec_mode: "fork",
            instances: 2,
            autorestart: true,
            cron_restart: "* 3 * * *",
            max_memory_restart: "100M",
            watch: true,
            ignore_watch: ["node_modules", "vendor"],
            args: [
                "queue:work",
                "database",
                "--queue=default",
                "--tries=3",
            ],
        },
    ]
}
