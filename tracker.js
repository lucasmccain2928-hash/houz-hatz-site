// Load environment variables
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Connect to Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Add a new task
async function addTask(user, task, status='In Progress', progress=0){
    const { data, error } = await supabase.from('progress')
        .insert([{ user_name: user, task_name: task, status, progress_value: progress }]);
    if(error) console.error('Insert Error:', error);
    else console.log('Task Added:', data);
}

// Update progress of a task by id
async function updateProgress(taskId, progress) {
  const { data, error } = await supabase.from('progress')
    .update({ progress_value: progress, last_updated: new Date() })
    .eq('id', taskId);

  if (error) console.error('Update Error:', error);
  else console.log('Task Updated:', data);
}

// Read all tasks
async function getTasks() {
  const { data, error } = await supabase.from('progress').select('*');
  if(error) console.error('Select Error:', error);
  else console.log('All Tasks:', data);
}

// Example usage
(async () => {
  await addTask('Lucas', 'Setup Supabase Tracker'); // Add a task
  await updateProgress(1, 50);                       // Update task id=1
  await getTasks();                                  // Show all tasks
  // await deleteTask(1);                            // Uncomment to delete task id=1
})();
